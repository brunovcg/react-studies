import Props from "./components/Props";
import SimpleObject from "./components/Props/SimpleObject";
import ArrayOfObject from "./components/Props/ArrayOfObject";
import Union from "./components/Props/Union";
import Children from "./components/Props/Children/Children";
import ChildrenReactNode from "./components/Props/Children/ChildrenReactNode";
import ReactComponent from "./components/Props/Children/ReactComponent";

const TypeScript = () => {
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
      <Props myName="Bruno" messageCount={10} isLogged />{" "}
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

export default TypeScript;
