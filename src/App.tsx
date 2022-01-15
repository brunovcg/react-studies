import Routing from "./routes";
import Header from "./components/header";
import Main from "./styles"

function App() {
  return (
    <div className="App" >
      <Header />
      <Main>
        <Routing />
      </Main>
    </div>
  );
}

export default App;
