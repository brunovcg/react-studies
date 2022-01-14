import ReactDOM from "react-dom";

const Modal = () => {
  return ReactDOM.createPortal (
    <div
      style={{
        background: "lightblue",
        height: "fit-content",
        padding: "20px 10px",
      }}
    >
      <h2>PORTAL</h2>
      <div
        style={{
            marginBottom: "20px"
        }}
      >
        isso é um modal dentro de um portal, esta sendo anexado a outro node,
        não o root. No Console, olhe onde está sendo implementado!
      </div>
    </div>
  , document.getElementById('portal'));
};

export default Modal;
