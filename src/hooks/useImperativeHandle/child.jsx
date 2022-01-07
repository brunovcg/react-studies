import React, { useImperativeHandle, useState } from "react";

const Child = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return { toggleModal };
  });

  return (
    <>
      {visible && <div style={{width: 'fit-content', background: "yellow"}}>MODAL ABERTO!</div>}
    </>
  );
});

export default Child;
