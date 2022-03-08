import React, { useState } from "react";
import styles from "../styles"



class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }


  componentDidUpdate(pProps, pState, SnapShot) {
    if (pProps !== this.props) {
      this.setState({ value: this.props.value });
    }
  }

  changeValue(value) {
    this.setState({ value: value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

const PassingProp = () => {
  const [inputed, setInputed] = useState("");
  const [name, setName] = useState("");

  function clickHandler() {
    setName(inputed);
  }

  return (
    <div style={styles.style4}>
        <h2> Passando props e iputs</h2>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" onChange={(e) => setInputed(e.target.value)} />
      <Username value={name} />
    </div>
  );
};



export default PassingProp;
