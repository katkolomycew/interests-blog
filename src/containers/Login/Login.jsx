import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import { Link } from "@reach/router";
import "./Login.module.scss";

class Login extends Component {
  render() {
    return (
      <body>
        <Link to="/homepage">
          <LoginForm />
        </Link>
      </body>
    );
  }
}

export default Login;
