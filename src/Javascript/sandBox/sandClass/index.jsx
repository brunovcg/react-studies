import React from "react";

class TabStrip extends React.Component {
  render() {
    return (
      <div className="TabStrip">
        {this.props.titles.map((title, index) => {
          const className =
            "TabStrip-title" +
            (this.isActive(index) ? " TabStrip-title-active" : "");

          return (
            <div
              onClick={() => this.setActiveIndex(index)}
              key={index}
              className={className}
            >
              {title}
            </div>
          );
        })}
      </div>
    );
  }

  isActive(index) {
    return index === this.getActiveIndex();
  }

  setActiveIndex(activeIndex) {
    let a = document.getElementsByClassName("TabStrip-title")[activeIndex];
    a.classList.remove("TabStrip-title");
    a.classList.add("TabStrip-title-active");
  }

  getActiveIndex() {}
}

class App2 extends React.Component {
  state = { activeIndex: 1 };
  render() {
    return (
      <div>
        <TabStrip
          activeIndex={this.state.activeIndex}
          onActiveIndexChange={(activeIndex) => {
            this.setState({
              activeIndex,
            });
          }}
          titles={["My account", "Settings", "Dashbboard"]}
        />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <App2></App2>
      </div>
    );
  }
}

export default App;
