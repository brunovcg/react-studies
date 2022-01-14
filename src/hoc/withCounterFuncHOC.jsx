import { useState } from "react";


const incrementHOCFunc = (OriginalComponent) => {
  const NewComponent = () => {
    const [counter, setCounter] = useState(0);

    const handleNClick = () => {
      setCounter(counter + 1);
    };

    return <OriginalComponent func={handleNClick} state={counter} />;
  };

  return NewComponent;
};

export default incrementHOCFunc;
