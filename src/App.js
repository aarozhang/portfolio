import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import Title from "./components/Title";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
        <Education></Education>
      </header>
    </div>
  );
}

export default App;
