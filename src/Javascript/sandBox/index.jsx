import React, { useRef, useState, useEffect, useLayoutEffect, useCallback } from 'react';
import {styles} from "./styles"
import './styles.css'
function ScrollableContainer({ children, scrollLength, classname }) {
  const containerRef = useRef();
  const [referedOptions, setReferedOptions] = useState([]);
  const [scrollLinkedList, setScrollLinkedList] = useState({});

  const scrollToNextItem = () => {
    const containerStartPosition = containerRef.current.getBoundingClientRect().x;
    const containerSize = containerRef.current.offsetWidth;
    const nextItemStartPosition = referedOptions[scrollLinkedList.next]?.ref.current.getBoundingClientRect().x;
    const nextItemSize = referedOptions[scrollLinkedList.next]?.ref.current.offsetWidth;
    return nextItemStartPosition - containerStartPosition - containerSize + nextItemSize;
  };

  const scrollToPreviousItem = () => {
    const containerCurrentScrollPosition = containerRef.current.scrollLeft;
    const previousItemStartPosition = referedOptions
      .filter((item, index) => index < scrollLinkedList.previous)
      .reduce((acc, next) => acc + next.ref.current.clientWidth, 0);

    return containerCurrentScrollPosition - previousItemStartPosition;
  };

  const checkIfIsVisible = (itemRef) => {
    const containerStart = containerRef?.current?.getBoundingClientRect().x;
    const containerEnd = (containerRef?.current?.offsetWidth || 0) + containerStart;
    const itemStart = itemRef?.current?.getBoundingClientRect().x;
    const itemEnd = (itemRef?.current?.offsetWidth || 0) + itemStart;
    return containerStart * 0.98 <= itemStart && containerEnd * 1.02 >= itemEnd;
  };

  const updateRefsVisibility = useCallback(() => {
    const checkedRefs = [...referedOptions].map((item) => checkIfIsVisible(item.ref));
    const firstTrueIndex = checkedRefs.indexOf(true);
    const lastTrueIndex = checkedRefs.lastIndexOf(true);
    const previous = firstTrueIndex <= 0 ? null : firstTrueIndex - 1;
    const next = lastTrueIndex === checkedRefs.length - 1 ? null : lastTrueIndex + 1;
    setScrollLinkedList({
      previous,
      next,
    });
  },[referedOptions]);

  const handleNext = () => {
    containerRef.current.scrollLeft += scrollLength || scrollToNextItem();
    updateRefsVisibility();
  };
  const handlePrevious = () => {
    containerRef.current.scrollLeft -= scrollLength || scrollToPreviousItem();
    updateRefsVisibility();
  };

  const insertRefsIntoOptions = () => {
    setReferedOptions(
      [...children].map((item, index) => ({
        component: item,
        id: index,
        ref: React.createRef(),
      }))
    );
  };

  useLayoutEffect(() => {
    insertRefsIntoOptions();
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      updateRefsVisibility();
    });

    ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, [referedOptions, updateRefsVisibility]);

  

  return (
    <div className={`n-scrollable-container ${classname}`}>
      <div className="n-scrollable-container-button-container">
        {scrollLinkedList.previous !== null ? (
          <button type="button" onClick={handlePrevious}>
            &lt;
          </button>
        ) : null}
      </div>
      <div ref={containerRef} className="n-scrollable-container-components-container">
        {referedOptions?.map((item) => (
          <div key={item.id} ref={item.ref} className="n-scrollable-container-component">
            {item.component}
          </div>
        ))}
      </div>
      <div className="n-scrollable-container-button-container">
        {scrollLinkedList.next ? (
          <button type="button" onClick={handleNext}>
            &gt;
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ScrollableContainer;

export const SandBox = () => {

  return (
    <div style={{ margin: "30px", width: "800px" }}>
      <ScrollableContainer scrollLength={false}>
        <div style={styles.content1}>component 1</div>
        <div style={styles.content2}>component 2</div>
        <div style={styles.content1}>component 4</div>
        <div style={styles.content2}>component 5</div>
        <div style={styles.content1}>component 6</div>
        <div style={styles.content1}>component 7</div>
        <div style={styles.content2}>component 8</div>
        <div style={styles.content1}>component 9</div>
        <div style={styles.content1}>component 10</div>
        <div style={styles.content2}>component 11</div>
        <div style={styles.content1}>component 12</div>
      </ScrollableContainer>
    </div>
  );
};
