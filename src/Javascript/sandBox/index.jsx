import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { styles } from "./styles";

const ScrollableContainer = ({ options, scrollLength }) => {
  const containerRef = useRef(null);
  const [referedOptions, setReferedOptions] = useState([]);
  const [scrollLinkedList, setScrollLinkedList] = useState({});

  const scrollToNextItem = () => {
    const containerStartPosition =
      containerRef.current.getBoundingClientRect().x;
    const containerSize = containerRef.current.offsetWidth;
    const nextItemStartPosition =
      referedOptions[scrollLinkedList.next].ref.current.getBoundingClientRect()
        .x;
    const nextItemSize =
      referedOptions[scrollLinkedList.next].ref.current.offsetWidth;
    return (
      nextItemStartPosition -
      containerStartPosition -
      containerSize +
      nextItemSize
    );
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
    const containerEnd = containerRef?.current?.offsetWidth + containerStart;
    const itemStart = itemRef?.current?.getBoundingClientRect().x;
    const itemEnd = itemRef?.current?.offsetWidth + itemStart;
    return containerStart * 0.98 <= itemStart && containerEnd * 1.02 >= itemEnd;
  };

  const updateRefsVisibility = useCallback(() => {
    const checkedRefs = [...referedOptions].map((item) =>
      checkIfIsVisible(item.ref)
    );
    const firstTrueIndex = checkedRefs.indexOf(true);
    const lastTrueIndex = checkedRefs.lastIndexOf(true);
    const previous = firstTrueIndex === 0 ? null : firstTrueIndex - 1;
    const next =
      lastTrueIndex === checkedRefs.length - 1 ? null : lastTrueIndex + 1;
    setScrollLinkedList({
      previous,
      next,
    });
  }, [referedOptions]);

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
      [...options].map((item, index) => ({
        ...item,
        id: index,
        ref: React.createRef(),
      }))
    );
  };

  useLayoutEffect(() => {
    insertRefsIntoOptions();
  }, []);

  useEffect(() => {
    updateRefsVisibility();
  }, [referedOptions, updateRefsVisibility]);

  return (
    <div style={styles.mainContainer}>
      <div style={styles.buttonContainer}>
        {scrollLinkedList.previous !== null ? (
          <button style={styles.button} onClick={handlePrevious}>
            &lt;
          </button>
        ) : null}
      </div>
      <div ref={containerRef} style={styles.componentsContainer}>
        {referedOptions?.map((item) => (
          <div key={item.id} ref={item.ref} style={styles.contenteContainer}>
            {item.component}
          </div>
        ))}
      </div>
      <div style={styles.buttonContainer}>
        {scrollLinkedList.next ? (
          <button style={styles.button} onClick={handleNext}>
            &gt;
          </button>
        ) : null}
      </div>
    </div>
  );
};

export const SandBox = () => {
  const options = [
    { component: <div style={styles.content1}>component 1</div> },
    { component: <div style={styles.content2}>component 2</div> },
    { component: <div style={styles.content1}>component 3</div> },
    { component: <div style={styles.content2}>component 4</div> },
    { component: <div style={styles.content1}>component 5</div> },
    { component: <div style={styles.content2}>component 6</div> },
    { component: <div style={styles.content1}>component 7</div> },
    { component: <div style={styles.content2}>component 8</div> },
    { component: <div style={styles.content1}>component 9</div> },
    { component: <div style={styles.content2}>component 10</div> },
    { component: <div style={styles.content1}>component 11</div> },
    { component: <div style={styles.content2}>component 12</div> },
    { component: <div style={styles.content1}>component 13</div> },
    { component: <div style={styles.content2}>component 14</div> },
  ];

  return (
    <div style={{ margin: "30px", width: "800px" }}>
      <ScrollableContainer options={options} scrollLength={false} />
    </div>
  );
};
