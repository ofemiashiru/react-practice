import StatelessFunctionalComponent from "./components/StatelessFunctionalComponent";
import StatefulClassComponent from "./components/StatefulClassComponent";
import StatelessWithHooks from "./components/StatelessWithHooks";

function App() {
  return (
    <>
      <pre>Stateless Function Component</pre>
      <StatelessFunctionalComponent name="Joe" />
      <hr />
      <pre>Statefull Class Component</pre>
      <StatefulClassComponent name="Jamie" />
      <hr />
      <pre>Stateless with Hooks</pre>
      <StatelessWithHooks name="Jenny" />
    </>
  );
}

export default App;
