import incrementHOC from "./withCounterHOC";

const HoverCounter = (props) => {
  return (
    <div
      style={{ background: "blue", color: "white", width: "fit-content", marginTop:"10px" }}
      onMouseOver={props.func}
    >
      Hoved {props.state} times
    </div>
  );
};

export default incrementHOC(HoverCounter);
