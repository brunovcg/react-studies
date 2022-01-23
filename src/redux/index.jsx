import ConnectCakeContainer from "./components/cakeContainer";
import IceCreamContainer from "./components/iceCreamContainer"
import HookCakeContainer from "./components/hooksCakeContainer"
import { Provider } from "react-redux";
import store from "./provider/store"

const Redux = () => {
  return (
    <Provider store={store}>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
        <ConnectCakeContainer />
        <HookCakeContainer />
      </div>

      <div style={{margin: "30px", background: "yellow", padding: "20px"}}>Usam a mesma variável na STORE, por isso mudam um ao outro.</div>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
        <IceCreamContainer  />
    
      </div>
    
    
    </Provider>
  );
};
export default Redux;
