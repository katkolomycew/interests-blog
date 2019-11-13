import React from "react";
import styles from "./App.module.scss";

class App extends React.Component {
  render() {
    return (
      <body>
        <main>
          <p className={styles.test}>test</p>
        </main>
      </body>
    );
  }
}

export default App;
