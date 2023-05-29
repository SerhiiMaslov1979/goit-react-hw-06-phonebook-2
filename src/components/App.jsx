import { ContactsForm } from './ContactsForm/ContactsForm';

import ContactsList from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
// import { Layout } from './Layout';
import './App.css';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className="App__container">
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      {contacts.length > 0 ? (
        <>
          <Filter />

          <ContactsList contacts={filteredContacts} />
        </>
      ) : (
        <p>No contacts</p>
      )}
      {/* <Layout /> */}
    </div>
  );
}
