import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import Phonebook from "./phonebook/Phonebook";
// import ContactList from "./contacts/Contacts";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  // reader = () => {
  //   const contact = {
  //     name: [this.state.name],
  //   };
  // };

  // inputValue = (e) => {
  //   this.setState({ name: e.target.value });
  //   console.log(e.target.value);
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  addContact = (name) => {
    const contact = { id: uuidv4(), name: name };
    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>

          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>

          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>

        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}></li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
