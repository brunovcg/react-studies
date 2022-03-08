import { store } from "./Store/Store";
import { Provider } from "react-redux";
import Notes from "./Pages/Notes";

const ReduxType = () => {
  return (
    <Provider store={store}>
      <Notes />
    </Provider>
  );
};

export default ReduxType;
