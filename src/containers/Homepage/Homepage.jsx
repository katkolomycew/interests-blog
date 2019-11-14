import React from "react";
import ToDoList from "../../components/ToDoList/ToDoList";
import styles from "./Homepage.module.scss";

class Homepage extends React.Component {
  render() {
    return (
      <div className={styles.homepageBackground}>
        <ToDoList />
      </div>
    );
  }
}

export default Homepage;
