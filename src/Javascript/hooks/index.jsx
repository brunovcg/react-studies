import UseStateHook from "./useState";
import UseReducerHook from "./useReducer";
import UseEffectHook from "./useEffect";
import UseLayoutEffectHook from "./useLayoutEffect";
import UseRefHook from "./useRef";
import UseImperativeHandleHook from "./useImperativeHandle";
import UseContextHook from "./useContext";
import UseCallbackHook from "./useCallback";
import UseMemoHook from "./useMemo";
import CustomHook from "./customs";
import UseDebugValueHook from "./useDebugValue";

const Hooks = () => {
  return (
    <div>
      <UseStateHook />
      <UseReducerHook />
      <UseEffectHook />
      <UseLayoutEffectHook />
      <UseRefHook />
      <UseImperativeHandleHook />
      <UseContextHook />
      <UseCallbackHook />
      <UseMemoHook />
      <CustomHook />
      <UseDebugValueHook />
    </div>
  );
};

export default Hooks;
