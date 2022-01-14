import incrementHOC from "./withCounterHOC";

const ClickCounter = (props) => {
  
  return (
    <>
      <p>usando HOC : {props.name}</p>
      <button onClick={props.func}>Clicked {props.state} times</button>
    </>
  );
};

export default incrementHOC(ClickCounter);
