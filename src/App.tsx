import UseStateHook from "./hooks/useState";
import UseEffectHook from "./hooks/useEffect";
import UseRefHook from "./hooks/useRef";

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
    </div>
  );
}

export default App;
