import React, { Component } from "react";
import styles from "./Phonebook.module.css";

class Phonebook extends Component {
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.onSubmit}>
        <h2>Name</h2>

        <input
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.props.onChange}
        ></input>

        <input
          type="tel"
          name="number"
          value={this.props.number}
          onChange={this.props.onChange}
        ></input>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Phonebook;
