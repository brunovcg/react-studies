import React from "react";

const incrementHOC = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleNClick = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <OriginalComponent
          name="Estamos usando HOC"
          func={this.handleNClick}
          state={this.state.count}
        />
      );
    }
  }
  return NewComponent;
};

export default incrementHOC;
