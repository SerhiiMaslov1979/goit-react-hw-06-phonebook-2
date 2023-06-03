import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import ContactsList from './ContactsList/ContactsList';
import './App.css';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className="App__container">
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      {contacts.length > 0 ? (
        <>
          <Filter />

          <ContactsList />
        </>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
}
