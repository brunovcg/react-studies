import UseStateHook from "./hooks/useState";
import UseEffectHook from "./hooks/useEffect";
import UseRefHook from "./hooks/useRef";
import UseImperativeHandleHook from './hooks/useImperativeHandle'

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseEffectHook />
      <UseRefHook />
      <UseImperativeHandleHook/>
    </div>
  );
}

export default App;
