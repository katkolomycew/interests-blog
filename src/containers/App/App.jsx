import React from "react";
import { Router } from "@reach/router";
import Login from "../Login";
// import Homepage from "/";
import "./App.module.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Login path="/" />
        {/* <Homepage path="/homepage" /> */}
      </Router>
    );
  }
}

export default App;
