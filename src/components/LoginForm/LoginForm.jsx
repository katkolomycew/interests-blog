import React, { Component } from "react";
import styles from "./LoginForm.module.scss";
import firebase, { provider } from "../../firebase";

class Login extends Component {
  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({ user });
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <section className={styles.formBackground}>
        <form className={styles.loginForm}>
          {/* <div className={styles.formInputs}>
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
            /> */}
          <button onClick={this.signIn}>Continue with Google</button>
          {/* </div> */}
        </form>
      </section>
    );
  }
}

export default Login;
