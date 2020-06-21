import React from "react";
import uuid from "uuid";
import Phonebook from "./phonebook/Phonebook";
import Contacts from "./contacts/Contacts";

function App() {
  return (
    <>
      <Phonebook />
      <Contacts />
    </>
  );
}

export default App;
