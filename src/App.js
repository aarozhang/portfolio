import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import Title from "./components/Title";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
        <Education></Education>
        <Experience></Experience>
      </header>
    </div>
  );
}

export default App;
