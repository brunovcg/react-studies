import React from "react";

class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

const FocusedInput = () => {
  const userRef = React.useRef(null);
  const inputRef = React.useRef(null);

  function clickHandler() {
    userRef.current.changeValue(inputRef.current.value);
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" ref={inputRef} />
      <Username ref={userRef} />
    </div>
  );
};

export default FocusedInput;
