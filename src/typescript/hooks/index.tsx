import UseStateHook from "./useState";
import UseReducerhHook from "./useReducer"
import {styles} from "../styles"
import UseContextHook from "./useContext";
import { UseRefHook } from "./useRef";

const Hooks = () => {
  return (
    <div >
      <h2 style={styles.style4}>useState</h2>
      <UseStateHook />

      <h2 style={styles.style4}>useReducer</h2>
      <UseReducerhHook />


      <h2 style={styles.style4}>useContext</h2>
      <UseContextHook />

      <h2 style={styles.style4}>useRef</h2>
      <UseRefHook />



    </div>
  );
};

export default Hooks;
