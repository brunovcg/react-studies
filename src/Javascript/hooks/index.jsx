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
import HookSection from "../../components/hook-section";

const Hooks = () => {
  const sections = [
    {
      title: "useState",
      Component: <UseStateHook />,
      color: "red"
    },
  ];

  return (
    <main>
      {sections?.map((item) => (
        <HookSection
          title={item.title}
          Component={item.Component}
          key={item.title}
          color={item.color}
        />
      ))}

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
      <UseIdHook />
    </main>
  );
};

export default Hooks;
