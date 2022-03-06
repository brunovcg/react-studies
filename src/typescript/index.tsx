import Hooks from "./hooks";
import Props from "./Props";
import {styles} from "./styles"
import StylesInLine from "./StylesInLine"

const TypeScript = () => {
  return (
    <>
      <div style={styles.style1}>

        <h2 style={styles.style2}>PROPS</h2>
        <Props />
      </div>

      <div style={styles.style5}>
        <h2 style={styles.style2}>Styles in Line</h2>
        <StylesInLine />
      </div>


      <div style={styles.style3}>
        <h2 style={styles.style2}>HOOKS</h2>
        <Hooks />
      </div>



    </>
  );
};

export default TypeScript;
