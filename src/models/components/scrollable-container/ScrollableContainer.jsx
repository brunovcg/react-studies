import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import "./styles.css";

function ScrollableContainer({ children, scrollLength, classname }) {
  const containerRef = useRef();
  const buttonRef = useRef();

  const [referedChildrens, setReferedChildrens] = useState([]);
  const [scrollLinkedList, setScrollLinkedList] = useState({});

  const checkIfIsVisible = (itemRef) => {
    const containerStart = containerRef?.current?.getBoundingClientRect().x;
    const containerEnd =
      (containerRef?.current?.offsetWidth || 0) + containerStart;
    const itemStart = itemRef?.current?.getBoundingClientRect().x;
    const itemEnd = (itemRef?.current?.offsetWidth || 0) + itemStart;
    return (
      Math.ceil(containerStart.toFixed(2)) <= Math.floor(itemStart.toFixed(2)) &&
      Math.ceil(containerEnd.toFixed(2)) >= Math.floor(itemEnd.toFixed(2))
    )
  };

  const updateRefsVisibility = useCallback(() => {
    const checkedRefs = [...referedChildrens].map((item) =>
      checkIfIsVisible(item.ref)
    );
    const firstTrueIndex = checkedRefs.indexOf(true);
    const lastTrueIndex = checkedRefs.lastIndexOf(true);
    const previous = firstTrueIndex <= 0 ? null : firstTrueIndex - 1;
    const next =
      lastTrueIndex === checkedRefs.length - 1 ? null : lastTrueIndex + 1;
    setScrollLinkedList({
      previous,
      next,
    });
  }, [referedChildrens]);

  const handleNext = () => {
    if (scrollLength) {
      containerRef.current.scrollLeft += scrollLength;
    } else {
      console.log(referedChildrens[scrollLinkedList.next]);
      referedChildrens[scrollLinkedList.next]?.ref.current.scrollIntoView({
        inline: "end",
        block: "start",
        behavior: "smooth",
      });
    }
    updateRefsVisibility();
  };

  const handlePrevious = () => {
    if (scrollLength) {
      containerRef.current.scrollLeft -= scrollLength;
    } else {
      referedChildrens[scrollLinkedList.previous]?.ref.current.scrollIntoView({
        inline: "end",
        block: "start",
        behavior: "smooth",
      });
    }
    updateRefsVisibility();
  };

  const insertRefsIntoChildrens = () => {
    setReferedChildrens(
      [...children].map((item, index) => ({
        component: item,
        id: index,
        ref: React.createRef(),
      }))
    );
  };

  useLayoutEffect(() => {
    insertRefsIntoChildrens();
  }, [children]);

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      updateRefsVisibility();
    });

    ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, [referedChildrens, updateRefsVisibility]);

  return (
    <div className={`n-scrollable-container ${classname}`}>
      <div className="n-scrollable-container-button-container">
        {scrollLinkedList.previous !== null ? (
          <button type="button" onClick={handlePrevious}>
            &lt;
          </button>
        ) : null}
      </div>
      <div
        ref={containerRef}
        className="n-scrollable-container-components-container"
      >
        {referedChildrens?.map((item) => (
          <div
            key={item.id}
            ref={item.ref}
            className="n-scrollable-container-component"
          >
            {item.component}
          </div>
        ))}
      </div>
      <div className="n-scrollable-container-button-container">
        {scrollLinkedList.next ? (
          <button type="button" onClick={handleNext} ref={buttonRef}>
            &gt;
          </button>
        ) : null}
      </div>
    </div>
  );
}


export default ScrollableContainer;
