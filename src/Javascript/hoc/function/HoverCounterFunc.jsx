import styles from "../styles";
import IncrementHOCFunc from "./IncrementFuncHOC";


const HoverCounterFunc = (props) => {
  return (
    <div
      style={styles.style2}
      onMouseOver={props.func}
    >
      Hoved {props.state} times
    </div>
  );
};

export default IncrementHOCFunc(HoverCounterFunc);
