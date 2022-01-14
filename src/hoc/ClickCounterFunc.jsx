import incrementHOCFunc from "./withCounterFuncHOC";

const ClickCounterFunc = (props) => {
  return (
    <>
      <button onClick={props.func}>Clicked {props.state} times</button>
    </>
  );
};

export default incrementHOCFunc(ClickCounterFunc);
