import { QueryExemples } from "./components/2-queries/Aplication";
import  MyAppProvidersExemple from "./components/8-Providers/MyApp"
function MyTestsApp() {
  return (
    <div>
      <p style={{ padding: "10px" }}>
        Open VSCode and check how does the test can be applied.{" "}
      </p>
      <QueryExemples />
      <MyAppProvidersExemple/>
    </div>
  );
}  

export default MyTestsApp;
