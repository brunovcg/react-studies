import { useSyncExternalStore } from "react";

function useSyncExternalStoreHook() {
  const width = useSyncExternalStore(
    (listener) => {
      window.addEventListener("resize", listener);
      return () => {
        window.removeEventListener("resize", listener);
      };
    },
    () => window.innerWidth
  );

  return (
    <section style={{ backgroundColor: "lightSalmon", padding: "20px" }}>
      <h2>useSyncExternalStore</h2>
      <p>
        useSyncExternalStore is a hook recommended for reading and subscribing
        from external data sources (stores). Here we are getting the window width.
      </p>
      <p>Size: {width}</p>
    </section>
  );
}

export default useSyncExternalStoreHook;
