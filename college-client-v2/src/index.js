import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/roboto";
import "./index.css";
import App from "./component/App";
import { configureStore } from "./store";
import { Provider } from "react-redux";

const store = configureStore();
// const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
