import ArrayOfObject from "./ArrayOfObject";
import Basics from "./Basics";
import Children from "./Children/Children";
import ChildrenReactNode from "./Children/ChildrenReactNode";
import ReactComponent from "./Children/ReactComponent";
import SimpleObject from "./SimpleObject";
import Union from "./Union";
import Events from "./Events";
import { styles } from "../styles";
import Private from "./componentProp/Private";
import Profile from "./componentProp/Profile";
import List from "./GenericProps";
import RandomNumber from "./RestrictionProp/RandomNumber";

export const PropsType = () => {
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
    <div style={styles.style1}>
      <h2>PROPS</h2>

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

      <h3 style={styles.style4}>+ Component Props</h3>
      <Private isLoggedIn component={Profile} />
      <Private isLoggedIn={false} component={Profile} />

      <h3 style={styles.style4}>+ Generic Props</h3>
      <List
        onClick={(item) => console.log(item)}
        items={["batman", "superman", "WonderWoman"]}
      />

      <List onClick={(item) => console.log(item)} items={[1, 2, 3, 4, 5]} />

      <List
        onClick={(item) => console.log(item)}
        items={[
          { id: 1, first: "bruno", last: "gouveia" },
          { id: 2, first: "brenda", last: "lima" },
        ]}
      />

      <h3 style={styles.style4}>+ Generic Props</h3>

      <RandomNumber value={100} isPositive/>
    </div>
  );
};

export default PropsType;
