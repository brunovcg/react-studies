import { useEffect, useInsertionEffect, useLayoutEffect } from "react";
import Child from "./child";

function UseInsertionEffectHook() {
  useEffect(() => {
    console.log("useEffect app is called");
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect app is called");
  });
  useInsertionEffect(() => {
    console.log("useInsertionEffect app is called");
  });
  return (
    <section style={{ backgroundColor: "mediumPurple", padding: "20px" }}>
      <h2>useInsertionEffect</h2>
      <p>
        useEffect(didUpdate) accepts a function that contains imperative,
        possibly effectful code, which are mutations, subscriptions, timers,
        logging, and other side effects. By default, effects run after every
        completed render, but the invocation can be controlled with a second
        argument of an array.
        <br />
        <br />
        useLayoutEffect has the same signature as useEffect, but it fires
        synchronously after all DOM mutations. i.e. it is fired before
        useEffect. It is used to read layout from the DOM and synchronously
        re-render. Updates scheduled inside useLayoutEffect will be flushed
        synchronously, before the browser has a chance to paint.
        <br />
        <br />
        useInsertionEffect has the same signature
        as useEffect, but it fires synchronously before all DOM mutations. i.e.
        it is fired before useLayoutEffect. It is used to inject styles into the
        DOM before reading layout.Is intended for CSS-in-JS libraries, such as
        styled-components. Since this hook is limited in scope, this hook does
        not have access to refs and cannot schedule updates.
      </p>
      <p>Look at the Console, it will render first for the component and it child</p>
      <Child />
      <p>Random Text</p>
    </section>
  );
}

export default UseInsertionEffectHook;
