import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }

  /* 
      ----- MANEIRA ERRADA, MAS FUNCIONA ----
      onToggle() {
        this.setState({ toggle: !this.state.toggle });
      }
      */

  onToggle() {
    this.setState((state, props) => ({ ...state, toggle: !state.toggle }));
  }

  render() {
    return (
      <React.Fragment>
        <a onClick={() => this.onToggle()} href="#">
          Want to buy a new car?
        </a>
        {this.state.toggle && <p>Call +11 22 33 44 now!</p>}
      </React.Fragment>
    );
  }
}

export default Message;
