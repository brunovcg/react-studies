import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const HOC = () => {
  return (
    <div style={{padding: "20px", background: "pink"}}>
      <h2>Higher Order Components</h2>
      <p>Ambos onClick e OnMouse over estão usando a mesma lógica de incrementação</p>

      <ClickCounter />
      
      <HoverCounter />
    </div>
  );
};

export default HOC;
