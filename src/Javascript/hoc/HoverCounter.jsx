import incrementHOC from "./withCounterHOC";
import styles from "./styles";

const HoverCounter = (props) => {
  return (
    <div style={styles.style1} onMouseOver={props.func}>
      Hoved {props.state} times
    </div>
  );
};

export default incrementHOC(HoverCounter);
