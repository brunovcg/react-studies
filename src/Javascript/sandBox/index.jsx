// import App from "./sandClass";
//import App from "./sandFunction";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";

const ScrolledContainer = ({ options, scrollLength }) => {
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

  //! position
  const scrollToPreviousItem = () => {
    console.log(scrollLine.previous);
    const containerStartPosition =
      containerRef.current.getBoundingClientRect().x;
    const containerSize = containerRef.current.offsetWidth;
    const previousItemStartPosition =
      referedOptions[scrollLine.previous].ref.current.getBoundingClientRect().x;
    const previousItemSize =
      referedOptions[scrollLine.previous].ref.current.offsetWidth;

    const containerCurrentScrollPosition = containerRef.current.scrollLeft;

    const position = referedOptions.filter(
      (item, index) => index < scrollLine.previous
    ).reduce((acc, next)=> acc+ next.ref.current.offsetWidth);

    console.log(containerCurrentScrollPosition - previousItemStartPosition);

    return containerCurrentScrollPosition + position;
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
      [...options].map((item) => ({ ...item, ref: React.createRef() }))
    );
  };

  useLayoutEffect(() => {
    insertRefsIntoOptions();
  }, []);

  useEffect(() => {
    updateRefsVisibility();
  }, [referedOptions]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40px", backgroundColor: "grey" }}>
        {!refsVisibility[0] ? (
          <button
            style={{ width: "100%", height: "100%" }}
            onClick={() => {
              containerRef.current.scrollLeft -= scrollToPreviousItem();
              updateRefsVisibility();
            }}
          >
            &lt;
          </button>
        ) : null}
      </div>
      <div
        ref={containerRef}
        style={{
          width: "600px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {referedOptions?.map((item) => (
          <div
            key={item.id}
            ref={item.ref}
            style={{
              width: "fit-content",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {item.component}
          </div>
        ))}
      </div>
      <div style={{ width: "40px", backgroundColor: "grey" }}>
        {!refsVisibility.at(-1) ? (
          <button
            style={{ width: "100%", height: "100%" }}
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
      <button
        onClick={() =>
          console.log(
            containerRef.current.scrollLeft,
            referedOptions[
              scrollLine.previous
            ]?.ref?.current.getBoundingClientRect().x,
            scrollLine.previous
          )
        }
      >
        xxx
      </button>
      <button onClick={() => console.log(refsVisibility)}>ver</button>
    </div>
  );
};

export const SandBox = () => {
  const options = [
    { id: 1, component: <div>Text1</div> },
    { id: 2, component: <div>Text2</div> },
    { id: 3, component: <div>Text3</div> },
    { id: 4, component: <div>Text4</div> },
    { id: 5, component: <div>Text5</div> },
    { id: 6, component: <div>Text6</div> },
    { id: 7, component: <div>Text7</div> },
    { id: 8, component: <div>Text8</div> },
    { id: 9, component: <div>Text9</div> },
    {
      id: 10,
      component: <div>Text10</div>,
    },
    {
      id: 11,
      component: <div>Text11</div>,
    },
    {
      id: 12,
      component: <div>Text12</div>,
    },
    {
      id: 13,
      component: <div>Text13</div>,
    },
    {
      id: 14,
      component: <div>Text14</div>,
    },
  ];

  return <ScrolledContainer options={options} />;
};
