import ReactDOM from "react-dom";
import styles from "./styles";

const PortalModal = () => {
  return ReactDOM.createPortal(
    <div
      style={styles.style1}
    >
      <h2>PORTAL</h2>
      <div
        style={styles.style1}
      >
        isso é um modal dentro de um portal, esta sendo anexado a outro node,
        não o root. No Console, olhe onde está sendo implementado!
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default PortalModal;
