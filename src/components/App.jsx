import { useState, useEffect } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import './App.css';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('componentDidMount');
    const savedContacts = localStorage.getItem('contacts');
    console.log(savedContacts);
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    } else {
    }
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate');
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('this.state', contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContacts = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const changleFilterValue = e => setFilter(e.target.value);

  console.log('render');
  const filteredContacts = getFilteredContacts();

  return (
    <div className="App__container">
      <h1>Phonebook</h1>
      <ContactsForm addContact={addContact} />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      {contacts.length > 0 ? (
        <>
          <Filter onChange={changleFilterValue} value={filter} />

          <ContactsList
            contacts={filteredContacts}
            onDeleteContacts={deleteContacts}
          />
        </>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
}
