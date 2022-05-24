import ConnectCakeContainer from "./components/cakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import HookCakeContainer from "./components/hooksCakeContainer";
import ChocolateContainer from "./components/chocolateContainer";
import AsyncContainer from "./components/asyncContainer";
import { Provider } from "react-redux";
import store from "./provider/store";
import styles from "./styles";
import ReduxToolkit from "./redux-toolkit";

const Redux = () => {
  return (
    <Provider store={store}>
      <section style={styles.style2}>
        <ConnectCakeContainer />
        <HookCakeContainer />
      </section>

      <div style={styles.style3}>
        Usam a mesma variável na STORE, por isso mudam um ao outro.
      </div>
      <section style={styles.style4}>
        <IceCreamContainer />
      </section>

      <section style={styles.style5}>
        <ChocolateContainer />
      </section>

      <section style={styles.style6}>
        <AsyncContainer />
      </section>

      <section style={styles.style6}>
        <ReduxToolkit />
      </section>
    </Provider>
  );
};
export default Redux;
