import React, { Component } from "react";
import styles from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <>
        <h2>Name</h2>
        <input></input>
        <button className={styles.btn}>Add contact</button>
      </>
    );
  }
}

export default Phonebook;
