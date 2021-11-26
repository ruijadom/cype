import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  <div className="bg-black min-h-screen text-white">
    <div className="p-10 text-3xl mx-auto max-w-6xl">
      <h1>Name: cype</h1>
      <h2>Framework: react</h2>
      <h3>Language: TypeScript</h3>
      <h4>CSS: Tailwind</h4>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
