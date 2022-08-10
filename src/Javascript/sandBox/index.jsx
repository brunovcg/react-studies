// import App from "./sandClass";
//import App from "./sandFunction";
import React, { useRef, useState, useEffect, useCallback } from "react";

const ScrolledContainer = ({ options }) => {
  const containerRef = useRef(null);
  const [referedOptions, setReferedOptions] = useState(options);

  const checkIfIsVisible = (itemRef) => {
    const containerStart = containerRef?.current?.getBoundingClientRect().x;
    const containerEnd = containerRef?.current?.offsetWidth + containerStart;
    const itemStart = itemRef?.current?.getBoundingClientRect().x;
    const itemEnd = itemRef?.current?.offsetWidth + itemStart;
    if (containerStart <= itemStart && containerEnd >= itemEnd) {
      return true;
    }
    return false;
  };

  const updateRefsVisibility = () => {
    const updatedRefs = [...referedOptions].map((item) => ({
      ...item,
      isVisvisible: checkIfIsVisible(item.ref),
    }));

    setReferedOptions(updatedRefs);
  };

  const insertRefsIntoOptions = (items) => {
    let refs = [...items];
    items.forEach((item, index) => {
      const ref = React.createRef();
      refs[index].ref = ref;
    });
    return refs;
  };

  useEffect(() => {
    setReferedOptions(insertRefsIntoOptions(referedOptions));
  }, []);

  useEffect(() => {
    updateRefsVisibility();
  }, [referedOptions]);

  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={() => {
          containerRef.current.scrollLeft -= 40;
          updateRefsVisibility();
        }}
      >
        &lt;
      </button>
      <div
        className="bruno"
        ref={containerRef}
        style={{
          width: "600px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          gap: "50px",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {referedOptions?.map((item) => (
          <div key={item.id} ref={item.ref}>
            {item.component}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          containerRef.current.scrollLeft += 40;
          updateRefsVisibility();
        }}
      >
        &gt;
      </button>
      <button onClick={() => console.log(referedOptions)}>xxx</button>
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
  ];

  return <ScrolledContainer options={options} />;
};
