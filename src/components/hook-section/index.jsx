import { useState } from "react";
const HookSection = ({ title, Component, color }) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => setVisible(!visible);

  return (
    <section style={{ backgroundColor: color, padding: "30px" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <h2 style={{fontSize: "30px"}}>{title}</h2> <button style={{ height: "40px", fontWeight: "bold" }} onClick={handleVisible}>LOAD</button>
      </div>
      {visible && <div style={{border: "1px solid black", padding: "30px"}}>{Component}</div>}
    </section>
  );
};

export default HookSection;
