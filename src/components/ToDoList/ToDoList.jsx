import React from "react";
import styles from "./ToDoList.module.scss";

class ToDoList extends React.Component {
  render() {
    return (
      <section className={styles.listContainer}>
        <div className={styles.listHeading}>
          <h1 className={styles.headingTitle}>To-Do List</h1>
          <form class="form">
            <label for="ToDo" className={styles.listLabel}>
              Today I need to do...
            </label>
            <input
              type="text"
              className={styles.listInput}
              name="ToDo"
              size="30"
              required
            />
            <button class="button" className={styles.listButton}>
              Submit
            </button>
            <ul className={styles.listItems}></ul>
          </form>
        </div>
      </section>
    );
  }
}

export default ToDoList;
