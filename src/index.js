import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./ServiceProvider";
import reducer, { intialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={intialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
