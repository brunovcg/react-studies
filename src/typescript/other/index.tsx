import { styles } from "../styles";
import { Html } from "./HTML";
import { Toast } from "./TemplateLiterals/toast";

export const OtherTypescript = () => {
  return (
    <div style={styles.style1}>
      <h2>Other tasks</h2>

      <h4 style={styles.style4}>Template Literals</h4>
      <Toast position={"center"} />

      <h4 style={styles.style4}>HTML Wrapping</h4>
      <Html/>
    </div>
  );
};
