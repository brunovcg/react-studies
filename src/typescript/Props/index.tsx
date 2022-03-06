import ArrayOfObject from "./ArrayOfObject";
import Basics from "./Basics";
import Children from "./Children/Children";
import ChildrenReactNode from "./Children/ChildrenReactNode";
import ReactComponent from "./Children/ReactComponent";
import SimpleObject from "./SimpleObject";
import Union from "./Union";
import Events from "./Events";
import { styles } from "../styles";

export const Props = () => {
  const personName = {
    first: "Brunce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Brunce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div>
      <h3 style={styles.style4}>+ Basics</h3>
      <Basics myName="Bruno" messageCount={10} isLogged />

      <h3 style={styles.style4}>+ Simple Objects</h3>
      <SimpleObject name={personName} />

      <h3 style={styles.style4}>+ Array of Objects</h3>
      <ArrayOfObject names={nameList} />

      <h3 style={styles.style4}>+ Union</h3>
      <Union status="loading" />

      <h3 style={styles.style4}>+ Children</h3>
      <Children>Estou passando um children aqui</Children>
      <ChildrenReactNode>
        <ReactComponent />
      </ChildrenReactNode>

      <h3 style={styles.style4}>+ Events</h3>
      <Events />
    </div>
  );
};

export default Props;
