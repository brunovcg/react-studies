import Count from "./count";
import Title from "./title";
import Button from "./button";
import { useState, useCallback } from "react";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge((old) => old + 1);
  }, []);

  const incrementSalary = useCallback(() => {
    setSalary((salary) => salary + 1000);
  }, []);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
