import React from "react";
import { v4 as uuidv4 } from "uuid";
import Phonebook from "./phonebook/Phonebook";
import ContactList from "./contacts/Contacts";

function App() {
  return (
    <>
      <Phonebook />
      <ContactList />
    </>
  );
}

export default App;
