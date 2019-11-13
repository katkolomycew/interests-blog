import React from "react";
import styles from "./Homepage.module.scss";

class Homepage extends React.Component {
  render() {
    return (
      <div className={styles.homepageBackground}>
        <p className={styles.test}>test</p>
      </div>
    );
  }
}

export default Homepage;
