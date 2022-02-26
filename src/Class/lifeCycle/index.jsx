import React from "react";
import styles from "../styles";

const Child = () => <div>Filho</div>;

class LyfeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 10,
      status: 0,
      counter: 0,
      renderizar: false,
      render2: false,
      unmount: 0,
    };
    // o bind antes de puder usar uma função anonima ()=>{} no click ou change
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // console.log("contructor");

  /*
  ------------------- DEPRECIADO -------------------
  componentWillMount() {
    console.log("Component will mount");
  }
  */

  componentDidMount() {
    // Equivale ao useEffect sem o array de dependências
    console.log("Component did mount");
  }

  /*
  ------------------- DEPRECIADO -------------------
  componentWillReceiveProps(nextProps) {
    console.log("Component will receive props", nextProps);
  }

  ------------------- DEPRECIADO -------------------
  // deveria retornar false se fosse renderizar
  shouldComponentUpdate(nextProps, nextUpdate) {
    console.log("Should component updade", nextProps, nextUpdate);
    return

  ------------------- DEPRECIADO -------------------
  componentWillUpdate(nextProps, nextUpdate) {
    console.log("Component will update", nextProps, nextUpdate);
  }
  */

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }
 /* ------------------- EM DEPRECIAÇÃO -------------------
  esta sendo removido
  componentWillUnmount() {
    console.log("DESMONTOU!");
  }
*/

  //chamando pouco antes do metodo de renderização, SUBSTITUI O WILL UNMOUNT
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("DESMONTOU!", nextProps, nextState);

    return null;
  }

  // para pegar erros
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  onAumentar(num) {
    this.setState({ counter: this.state.counter + num });
  }

  toggleMenu() {
    this.setState({ renderizar: !this.state.renderizar });
  }

  render() {
    return (
      <div style={styles.style5}>
        <h2>Life Cycle</h2>

        <div>
          <h3>Ordenação</h3>
          <ol>
            <li style={styles.style6}>
              componentWillMount{" "}
              <span style={styles.style6}> - Depreciado</span>
            </li>
            <li>componentDidMount</li>
            <li style={styles.style6}>
              componentWillReceiveProps
              <span style={styles.style6}> - Depreciado</span>
            </li>
            <li style={styles.style6}>
              shouldComponentUpdate
              <span style={styles.style6}> - Depreciado</span>
            </li>
            <li style={styles.style6}>
              componentWillUpdate{" "}
              <span style={styles.style6}> - Depreciado</span>
            </li>
            <li>componentDidUpdate</li>
            <li style={styles.style6}>
              componentWillUnmount{" "}
              <span style={styles.style6}> - Em depreciação</span>
            </li>
          </ol>
        </div>

        <div>
          <h3>Testando</h3>
          <p>Contador: {this.state.counter}</p>
          <button onClick={() => this.onAumentar(1)}>Aumentar</button>
          <h3>Desmontandor</h3>
          {this.state.renderizar && <Child />}
          <button onClick={this.toggleMenu}>Montar/ Desmontar</button>
          {this.state.render2 && <Child />}
          <br />
          <br />
          <button
            onClick={() => this.setState({ render2: !this.state.render2 })}
          >
            Montar/ Desmontar
          </button>
          <br />
          <br />
          unmount: {this.state.unmount}
        </div>
      </div>
    );
  }
}

export default LyfeCycle;
