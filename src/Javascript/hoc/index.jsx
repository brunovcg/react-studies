import ClickCounter from "./class/ClickCounter";
import ClickCounterFunc from "./function/ClickCounterFunc";
import HoverCounterFunc from "./function/HoverCounterFunc";
import HoverCounter from "./class/HoverCounter";
import styles from "./styles";

const HOC = () => {
  return (
    <div style={styles.style3}>
      <h2>Higher Order Components</h2>
      <p>
        Ambos onClick e OnMouse over estão usando a mesma lógica de
        incrementação
      </p>

      <h3>Using Class</h3>

      <ClickCounter />
      <HoverCounter />

      <h3>Using Functional</h3>

      <ClickCounterFunc />
      <HoverCounterFunc />
    </div>
  );
};

export default HOC;
