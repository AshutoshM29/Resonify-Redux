import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/index";
import store from "./store/store";
import { Provider } from "react-redux";

// Initiate Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);