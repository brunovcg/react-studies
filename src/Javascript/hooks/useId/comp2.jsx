
import { useId } from 'react';

const Comp2 = () => {
  const id = useId();
  return (
    <>
      <div>Comp2 id({id})</div>
      <label htmlFor={`${id}-1`}>Label 1</label>
      <div>
        <input id={`${id}-1`} type="text" />
      </div>
      <label htmlFor={`${id}-2`}>Label 2</label>
      <div>
        <input id={`${id}-2`} type="text" />
      </div>
    </>
  );
};

export default Comp2