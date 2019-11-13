import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Login from "../containers/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="login" />
        <Login path="login" />
      </Router>
    );
  }
}

export default Routes;
