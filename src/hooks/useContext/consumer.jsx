import styles from "../styles";
import { useProvider } from "./provider";

const Consumer = () => {
  const { count } = useProvider();

  return <div style={styles.style2}>{count}</div>;
};

export default Consumer;
