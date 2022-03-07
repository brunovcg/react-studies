import React from "react";

type CounterProps = {
  message: string;
};

type CounterState = { count: number };

class ClassState extends React.Component<CounterProps, CounterState> {



  /* 
  
  ++ SE NÃO TIVER PROPS ++
  class ClassState extends React.Component<{}, CounterState> { 
    
  ++ SE NÃO TIVER STATES ++
  class ClassState extends React.Component<CounterProps> {   

    */
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Somar</button>
        <br/>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default ClassState;
