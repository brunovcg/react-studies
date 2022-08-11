// import App from "./sandClass";
//import App from "./sandFunction";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { styles } from "./styles";

const ScrollableContainer = ({ options, scrollLength }) => {
  const containerRef = useRef(null);
  const [referedOptions, setReferedOptions] = useState([]);
  const [refsVisibility, setRefsVisibility] = useState([]);
  const [scrollLine, setScrollLine] = useState({});

  const checkIfIsVisible = (itemRef) => {
    const containerStart = containerRef?.current?.getBoundingClientRect().x;
    const containerEnd = containerRef?.current?.offsetWidth + containerStart;
    const itemStart = itemRef?.current?.getBoundingClientRect().x;
    const itemEnd = itemRef?.current?.offsetWidth + itemStart;
    if (
      Math.floor(containerStart) <= Math.floor(itemStart) &&
      Math.floor(containerEnd) >= Math.floor(itemEnd)
    ) {
      return true;
    }
    return false;
  };

  const scrollToNextItem = () => {
    const containerStartPosition =
      containerRef.current.getBoundingClientRect().x;
    const containerSize = containerRef.current.offsetWidth;
    const nextItemStartPosition =
      referedOptions[scrollLine.next].ref.current.getBoundingClientRect().x;
    const nextItemSize =
      referedOptions[scrollLine.next].ref.current.offsetWidth;

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
      .filter((item, index) => index < scrollLine.previous)
      .reduce((acc, next) => acc + next.ref.current.clientWidth, 0);

    return containerCurrentScrollPosition - previousItemStartPosition;
  };

  const updateRefsVisibility = () => {
    const checkedRefs = [...referedOptions].map((item) =>
      checkIfIsVisible(item.ref)
    );
    const firstTrueIndex = checkedRefs.indexOf(true);
    const lastTrueIndex = checkedRefs.lastIndexOf(true);
    const previous = firstTrueIndex === 0 ? null : firstTrueIndex - 1;
    const next =
      lastTrueIndex === checkedRefs.length - 1 ? null : lastTrueIndex + 1;
    setScrollLine({
      previous,
      next,
    });
    setRefsVisibility(checkedRefs);
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
  }, [referedOptions]);

  return (
    <div style={styles.mainContainer}>
      <div style={styles.buttonContainer}>
        {!refsVisibility[0] ? (
          <button
            style={styles.button}
            onClick={() => {
              containerRef.current.scrollLeft -=
                scrollLength || scrollToPreviousItem();
              updateRefsVisibility();
            }}
          >
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
        {!refsVisibility.at(-1) ? (
          <button
            style={styles.button}
            onClick={() => {
              containerRef.current.scrollLeft +=
                scrollLength || scrollToNextItem();
              updateRefsVisibility();
            }}
          >
            &gt;
          </button>
        ) : null}
      </div>
    </div>
  );
};

export const SandBox = () => {
  const options = [
    { component: <div style={styles.content1}>Text1</div> },
    { component: <div style={styles.content2}>Text2</div> },
    { component: <div style={styles.content1}>Text3</div> },
    { component: <div style={styles.content2}>Text4</div> },
    { component: <div style={styles.content1}>Text5</div> },
    { component: <div style={styles.content2}>Text6</div> },
    { component: <div style={styles.content1}>Text7</div> },
    { component: <div style={styles.content2}>Text8</div> },
    { component: <div style={styles.content1}>Text9</div> },
    {
      component: <div style={styles.content2}>Text10</div>,
    },
    {
      component: <div style={styles.content1}>Text11</div>,
    },
    {
      component: <div style={styles.content2}>Text12</div>,
    },
    {
      component: <div style={styles.content1}>Text13</div>,
    },
    {
      component: <div style={styles.content2}>Text14</div>,
    },
  ];

  return <ScrollableContainer options={options} />;
};
