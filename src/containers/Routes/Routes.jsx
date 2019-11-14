import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Login from "../containers/Login";
import Homepage from "../Homepage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="/homepage" />
        <Login path="/" />
        <Homepage path="/homepage" />
      </Router>
    );
  }
}

export default Routes;
