import React from "react";
import Login from "../Login";
import Homepage from "../Homepage";
import { Router } from "@reach/router";
import "./App.module.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Login path="/" />
        <Homepage path="/homepage" />
      </Router>
    );
  }
}

export default App;
