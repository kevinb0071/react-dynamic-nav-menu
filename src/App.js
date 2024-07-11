import "./App.css";
import menus from "./components/tree-view/data";
import TreeView from "./components/tree-view";

function App() {
  return (
    <div className="App">
      {/* Tree View Component */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
