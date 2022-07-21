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
import UseDeferedValueHook from "./useDeferedValue";
import UseTransitionHook from "./useTransition";
import UseSyncExternalStore from "./useSyncExternalStore";
import UseInsertionEffectHook from "./useInsertionEffect";
import UseIdHook from "./useId";

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
      <UseDeferedValueHook />
      <UseTransitionHook />
      <UseSyncExternalStore />
      <UseInsertionEffectHook />
      <UseIdHook/>
    </div>
  );
};

export default Hooks;
