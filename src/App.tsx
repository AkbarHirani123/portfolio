import logo from "./logo.svg";
import "./App.css";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Akbar
        </a>
      </header>
    </div>
  );
}

export default App;
