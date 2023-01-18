import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { nanoid } from 'nanoid';
import contactsJson from '../assets/contacts.json';

import styles from './App.module.css';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from './Filter/Filter';





export const App = () => {

  const [filter, setFilter] = useState('');

 
 
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || contactsJson);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  
  const handleUpdateSearch = event => {
    setFilter(event.target.value);
    
  };  
  
   
  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  const visibleContacts = getVisibleContacts();

  const formSubmitHandler = ( name, number ) => {
    const Contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === Contact.name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.warning(`"${Contact.name}" is already in contacts.`);
    }

    setContacts([Contact, ...contacts]);
   
  };

return (
    <div className={styles.container} >
      <h1>Phonebook</h1>
    <ContactForm  formSubmitHandler={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleUpdateSearch} />
    <ContactList contacts={visibleContacts} onDelete={handleDelete} /> 
    
    </div>
  );

}
