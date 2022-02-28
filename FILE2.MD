import React from "react";

const sampleOptions = [
  { id: "753", title: "This is the first option" },
  { id: "035", title: "This is the second option" },
];

class OptionsShower extends React.Component {
  constructor(props) {
    super(props);
    const { options } = props;
    this.state = { options, displayOptions: false };
  }

  displayOptions() {
    this.setState({
      options: this.state.options,
      displayOptions: !this.state.displayOptions,
    });
  }

  render() {
    var options = null;
    if (this.state.displayOptions) {
      options = (
        <ul id="options">
          {this.state.options.map((option) => (
            <li key={option.id}>{option.title}</li>
          ))}
        </ul>
      );
    }
    return (
      <div>
        <button onClick={()=>this.displayOptions()}>
          {this.state.displayOptions ? "Hide options" : "Show options"}
        </button>
        {options}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <React.Fragment>  <OptionsShower options={sampleOptions} /> </React.Fragment>;
  }
}

export default App;
