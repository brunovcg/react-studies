import UseStateHook from "./useState";
import UseReducerhHook from "./useReducer"
import {styles} from "../styles"

const Hooks = () => {
  return (
    <div >
      <h2 style={styles.style4}>useState</h2>
      <UseStateHook />

      <h2 style={styles.style4}>useReducer</h2>
      <UseReducerhHook />



    </div>
  );
};

export default Hooks;
