import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Login from "../containers/Login";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="/homepage" />
        <PrivateRoute path="private" user={this.state.user} />
        <Login path="/" />
        <Homepage path="/homepage" />
      </Router>
    );
  }
}

export default Routes;
