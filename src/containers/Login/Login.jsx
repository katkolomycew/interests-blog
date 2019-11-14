import React from "react";
import firebase, { provider } from "../../firebase";
import styles from "./Login.module.scss";

class Login extends React.Component {
  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({ user });
        console.log(result);
        this.props.navigate("/homepage");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <section className={styles.loginBackground}>
        <div className={styles.formBackground}>
          <button onClick={this.signIn}>Continue with Google</button>
        </div>
      </section>
    );
  }
}

export default Login;
