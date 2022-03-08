// import App from "./sandClass";
import App from "./sandFunction";
//import App from "./sandClass"
import GroceryApp from "./awnsered/groceryApp";
import Message from "./awnsered/toogleMessage";
import ToDoItemApp from "./awnsered/todoItem";
import FocusedInput from "./awnsered/focusedInput"

const SandBox = () => {
  return (
    <div>
      <App />

      {/* ------------- RESPONDIDAS -------------- */}

      {/* <GroceryApp
        products={[
          { name: "Oranges", votes: 0 },
          { name: "Bananas", votes: 0 },
        ]}
      /> */}

      {/* <Message/> */}
      {/* <ToDoItemApp
        items={[
          { text: "Buy grocery", done: true },
          { text: "Play guitar", done: false },
          { text: "Romantic dinner", done: false },
        ]} */}

        {/* <FocusedInput/> */}
    
    </div>
  );
};

export default SandBox;
