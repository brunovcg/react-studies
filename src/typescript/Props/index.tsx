import ArrayOfObject from "./ArrayOfObject";
import Basics from "./Basics";
import Children from "./Children/Children";
import ChildrenReactNode from "./Children/ChildrenReactNode";
import ReactComponent from "./Children/ReactComponent";
import SimpleObject from "./SimpleObject";
import Union from "./Union";

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
      <Basics myName="Bruno" messageCount={10} isLogged />{" "}
      <SimpleObject name={personName} />
      <ArrayOfObject names={nameList} />
      <Union status="loading" />
      <Children>Estou passando um children aqui</Children>
      <ChildrenReactNode>
        <ReactComponent />
      </ChildrenReactNode>
    </div>
  );
};

export default Props;
