import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './App.module.css';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter} from './Filter/Filter';




export class App extends Component{


  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  addContact = ({ name, number }) => {
    const Contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === Contact.name.toLowerCase()
      )
    ) {
      return alert(`${Contact.name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [Contact, ...prevState.contacts],
    }));
  };

  handleDelete = id => {
      this.setState(prevState => {
      const newContactsList = prevState.contacts.filter(contact => contact.id !== id);

      return { contacts: newContactsList };
    });
  }

  handleUpdateSearch = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    
  };
  
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();


    return (
    <div className={styles.container} >
      <h1>Phonebook</h1>
      <ContactForm onContact={this.addContact}/>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.handleUpdateSearch} />
      <ContactList contacts={visibleContacts} onDelete={this.handleDelete} /> 
    </div>
  );
  }
  
};
