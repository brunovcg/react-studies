import React, { useImperativeHandle, useState } from "react";
import styles from "../styles";

const Child = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);


  const toggleModal = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return { toggleModal };
  });

  return <>{visible && <div style={styles.style7}>MODAL ABERTO!</div>}</>;
});

export default Child;
