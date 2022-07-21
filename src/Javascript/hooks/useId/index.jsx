import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";

function UseIdHook() {
  return (
    <section>
      <p>
        In a Web application, there are cases that need unique ids, for example:
        , where the for attribute must be equal to the id attribute of the
        related element to bind them together. aria-labelledby, where the
        aria-labelledby attribute could take multiple ids. useId() is a hook
        that generates a unique id: This id is stable across the server and
        client, which avoids hydration mismatches for server-side rendering.
        This id is unique for the entire application. In the case of multi-root
        applications, createRoot/hydrateRoot has an optional prop,
        identifierPrefix, which can be used to add a prefix to prevent
        collisions. This id can be appended with prefix and/or suffix to
        generate multiple unique ids that are used in a component. It seems
        trivial. But, useId was evolved from useOpaqueIdentifier, which
        generates an opaque id that cannot be operated upon.
      </p>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </section>
  );
}

export default UseIdHook;
