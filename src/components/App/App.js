import "./App.css";
import React from "react";
import Heading from "../Heading/Heading";
import Greeting from "../Greeting/Greeting";
import Clock from "../Clock/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <p>
          <Greeting /> Kerwin
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
        <Clock />
      </header>
    </div>
  );
}

export default App;
