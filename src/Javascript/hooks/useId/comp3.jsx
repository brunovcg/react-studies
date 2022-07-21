import { useId } from "react";

const Comp3 = () => {
  const id = useId();
  return (
    <>
      <div>I am Comp3: {id}</div>
    </>
  );
};

export default Comp3;
