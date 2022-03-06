import Hooks from "./hooks";
import Props from "./Props";
import {styles} from "./styles"

const TypeScript = () => {
  return (
    <>
      <div style={styles.style1}>
        <h2 style={styles.style2}>PROPS</h2>
        <Props />
      </div>
      <div style={styles.style3}>
        <h2 style={styles.style2}>HOOKS</h2>
        <Hooks />
      </div>
    </>
  );
};

export default TypeScript;
