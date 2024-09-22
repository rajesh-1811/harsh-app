import logo from "./logo.svg";
import logoJesus from "./jesus.jpg";
import logoHarsh from "./harsh.jpg";

import "./App.css";
import HarshButton from "./components/HarshButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoHarsh} className="App-logo" alt="logo" />
        <p>
          Harsh <code>macwan</code>
          <br />
          Rajesh <code>macwan</code>
        </p>
        <HarshButton />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
