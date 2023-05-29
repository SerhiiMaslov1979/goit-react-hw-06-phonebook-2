import React from 'react';
import './ContactsList.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Contacts/contactsSlice';

const ContactsList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className="ContactsList__list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="ContactsList__item">
          <p className="ContactsList__text">
            {name}: {number}
          </p>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
