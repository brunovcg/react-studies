import UseStateHook from "./useState";
import UseReducerHook from "./useReducer";
import UseEffectHook from "./useEffect";
import UseLayoutEffectHook from "./useLayoutEffect";
import UseRefHook from "./useRef";
import UseImperativeHandleHook from "./useImperativeHandle";
import UseContextHook from "./useContext";
import UseCallbackHook from "./useCallback";
import UseMemoHook from "./useMemo";
import CustomHook from "./customHook";
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
      color: "#ef8282",
    },
    {
      title: "useReduce",
      Component: <UseReducerHook />,
      color: "#e5ebb1",
    },
    {
      title: "useEffect",
      Component: <UseEffectHook />,
      color: "#86bbdc",
    },
    {
      title: "useLayoutEffect",
      Component: <UseLayoutEffectHook />,
      color: "#cb86dc",
    },
    {
      title: "useRef",
      Component: <UseRefHook />,
      color: "#badc86",
    },
    {
      title: "useImperativeHandle",
      Component: <UseImperativeHandleHook />,
      color: "#86a4dc",
    },
    {
      title: "useContext",
      Component: <UseContextHook />,
      color: "#dcdb86",
    },
    {
      title: "useCallback",
      Component: <UseCallbackHook />,
      color: "#badc86",
    },
    {
      title: "useMemo",
      Component: <UseMemoHook />,
      color: "#d586dc",
    },
    {
      title: "Custom Hooks",
      Component: <CustomHook />,
      color: "#86dcd6",
    },
    {
      title: "useDebugValue",
      Component: <UseDebugValueHook />,
      color: "#f5e265",
    },
    {
      title: "useDeferedValue ",
      Component: <UseDeferedValueHook />,
      color: "#65f567",
    },
    {
      title: "useTransition ",
      Component: <UseTransitionHook />,
      color: "#eb65f5",
    },

    {
      title: "useSyncExternalStore",
      Component: <UseSyncExternalStore />,
      color: "#65caf5",
    },

    {
      title: "useInsertionEffect",
      Component: <UseInsertionEffectHook />,
      color: "#f5cf65",
    },
    {
      title: "useId",
      Component: <UseIdHook />,
      color: "#a1f565",
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
    </main>
  );
};

export default Hooks;
