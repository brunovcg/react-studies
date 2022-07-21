import { useState } from "react";
const HookSection = ({ title, Component, color }) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => setVisible(!visible);

  return (
    <section style={{ backgroundColor: color, padding: "30px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <h3>{title}</h3> <button onClick={handleVisible}>LOAD</button>
      </div>
      {visible && Component }
    </section>
  );
};

export default HookSection;
