import IncrementHOCFunc from "./IncrementFuncHOC";

const ClickCounterFunc = (props) => {
  return (
    <>
      <button onClick={props.func}>Clicked {props.state} times</button>
    </>
  );
};

export default IncrementHOCFunc(ClickCounterFunc);
