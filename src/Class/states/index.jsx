import React from "react";
import styles from "../styles";

class States extends React.Component {
  constructor(props) {
    super();
    this.state = {
      links: props.links,
    };
  }

  handleRemove(id) {
    let newRow = this.state.links.filter((item) => item !== id);
    this.setState({ ...this.state, links: newRow });
  }

  render() {
    return (
      <div style={styles.style1}>
        <h2 style={styles.style2}>State</h2>
        <p>Usando o state e o setState para alterar o estado</p>
        <div style={styles.style3}>
          {this.state.links.length > 0 &&
            this.state.links.map((item, index) => (
              <div key={index}>
                <div className="image">
                  <img src={item} alt="anyImage" />
                  <button
                    className="remove"
                    onClick={() => this.handleRemove(item)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default States;
