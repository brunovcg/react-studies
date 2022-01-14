import ClickCounter from "./ClickCounter";
import ClickCounterFunc from "./ClickCounterFunc";
import HoverCounterFunc from "./HoverCounterFunc";
import HoverCounter from "./HoverCounter";

const HOC = () => {
  return (
    <div style={{ padding: "20px", background: "pink" }}>
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
