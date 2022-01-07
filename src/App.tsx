import UseStateHook from "./hooks/useState";
import UseEffectHook from "./hooks/useEffect";
import UseRefHook from "./hooks/useRef";
import UseImperativeHandleHook from './hooks/useImperativeHandle'
import UseDebugValueHook from './hooks/useDebugValue';
import UseLayoutEffectHook  from "./hooks/useLayoutEffect"
import UseContextHook from "./hooks/useContext"
import UseReducerHook from "./hooks/useReducer"

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
      <UseReducerHook/>
    </div>
  );
}

export default App;
