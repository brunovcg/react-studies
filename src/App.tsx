import UseStateHook from "./hooks/useState";
import UseEffectHook from "./hooks/useEffect";
import UseRefHook from "./hooks/useRef";
import UseImperativeHandleHook from './hooks/useImperativeHandle'
import UseDebugValueHook from './hooks/useDebugValue';
import UseLayoutEffectHook  from "./hooks/useLayoutEffect"
import UseContextHook from "./hooks/useContext"
import UseReducerHook from "./hooks/useReducer"
import UseCallbackHook from "./hooks/useCallback"
import UseMemoHook from "./hooks/useMemo"
import Modal from "./portals/modal"
import HOC from "./hoc"
import CustomHook from "./hooks/customs"

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
      <UseCallbackHook/>
      <CustomHook/>
      <UseMemoHook/>
      <Modal/>
      <HOC/>
    </div>
  );
}

export default App;
