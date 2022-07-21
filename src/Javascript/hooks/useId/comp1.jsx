import { useId } from "react";
const Comp1 = () => {
  const id = useId();
  return <div>Comp1 id: {id}</div>;
};

export default Comp1
