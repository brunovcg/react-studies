import Routing from "./routes";
import Header from "./components/header";
import Main from "./styles";
import { HeaderProvider } from "./providers";

function App() {

  return (
    <div className="App">
      <HeaderProvider>
        <Header />
        <Main>
          <Routing />
        </Main>
      </HeaderProvider>
    </div>
  );
}

export default App;
