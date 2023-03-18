import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';

import { Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  addContact = name => {
    const abonent = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => ({
      contacts: [abonent, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <ContactsList contacts={contacts} />
      </Container>
    );
  }
}

export default App;