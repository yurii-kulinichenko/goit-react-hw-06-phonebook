import React, { useEffect, useState } from 'react';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = newContact => {
    if (
      contacts.find(contact =>
        contact.name.toLowerCase().includes(newContact.name.toLowerCase())
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }
    setContacts([...contacts, newContact]);
  };

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={onFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDelete={handleDelete}
      />
    </div>
  );
};
