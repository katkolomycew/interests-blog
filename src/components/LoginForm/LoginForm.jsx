import React, { Component } from "react";
import styles from "./LoginForm.module.scss";

class Login extends Component {
  render() {
    return (
      <section className={styles.formBackground}>
        <form className={styles.loginForm}>
          <div className={styles.formInputs}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button>Continue</button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
