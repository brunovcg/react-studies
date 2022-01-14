import incrementHOCFunc from "./withCounterFuncHOC";

const HoverCounterFunc = (props) => {
  return (
    <div
      style={{
        background: "red",
        color: "white",
        width: "fit-content",
        marginTop: "10px",
      }}
      onMouseOver={props.func}
    >
      Hoved {props.state} times
    </div>
  );
};

export default incrementHOCFunc(HoverCounterFunc);
