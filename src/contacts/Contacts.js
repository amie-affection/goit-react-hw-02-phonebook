import React from "react";
import OneContact from "../oneContact/OneContact";
import FilterContacts from "../filterContacts/FilterContacts";

const ContactList = ({ contacts, filter, onChange }) => {
  return (
    <>
      <h2>Contacts</h2>
      <FilterContacts filter={filter} onChange={onChange} />
      <ul>
        {contacts.map((contact) => (
          <OneContact contact={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
