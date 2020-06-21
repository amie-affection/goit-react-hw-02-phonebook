import React from "react";
import OneContact from "../oneContact/OneContact";

const ContactList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <OneContact key={contact.id} data={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
