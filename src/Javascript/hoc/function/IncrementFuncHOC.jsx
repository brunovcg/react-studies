import { useState } from "react";

const IncrementHOCFunc = (OriginalComponent) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleNClick = () => {
      setCounter(counter + 1);
    };

    return <OriginalComponent func={handleNClick} state={counter} />;
  };

  return NewComponent;
};

export default IncrementHOCFunc;
