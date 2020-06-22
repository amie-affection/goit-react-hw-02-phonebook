import React from "react";

const OneContact = ({ contact }) => {
  return (
    <li>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
    </li>
  );
};

export default OneContact;
