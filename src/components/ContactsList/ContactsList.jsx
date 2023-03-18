import React from 'react';

const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name }) => (
      <li key={id}>
        <p>{name}</p>
      </li>
    ))}
  </ul>
);

export default ContactsList;
