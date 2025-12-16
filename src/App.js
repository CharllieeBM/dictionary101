import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/CharllieeBM/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Charllotte Blackwell-Maleshkov
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/CharllieeBM/react-weather-directory"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
