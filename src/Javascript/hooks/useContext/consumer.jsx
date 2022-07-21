import styles from "../styles";
import { ProviderContext } from "./";
import { useContext } from "react";

const Consumer = () => {
  const { count } = useContext(ProviderContext);

  return <div style={styles.style2}>{count}</div>;
};

export default Consumer;
