import styles from "../styles";
import incrementHOCFunc from "./withCounterFuncHOC";


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

export default incrementHOCFunc(HoverCounterFunc);
