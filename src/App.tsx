import UseStateHook from "./hooks/useState";
import UseEffectHook from "./hooks/useEffect";
import UseRefHook from "./hooks/useRef";
import UseImperativeHandleHook from './hooks/useImperativeHandle'
import UseDebugValueHook from './hooks/useDebugValue';
import UseLayoutEffectHook  from "./hooks/useLayoutEffect"
import UseContextHook from "./hooks/useContext"

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseDebugValueHook/>
      <UseEffectHook />
      <UseLayoutEffectHook />
      <UseRefHook />
      <UseImperativeHandleHook/>
      <UseContextHook/>
    </div>
  );
}

export default App;
