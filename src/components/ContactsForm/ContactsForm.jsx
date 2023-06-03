import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import '../ContactsForm/ContactsForm.css';

import { useSelector } from 'react-redux';

import { addContact } from '../../redux/Contacts/contactsSlice';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';

const numberReg =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const nameReg = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameReg,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .matches(
      numberReg,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
        contact => values.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), ...values };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className="ContactsForm__Form">
        <label htmlFor="name" className="ContactsForm__name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="number" className="ContactsForm__number">
          Number
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit" className="ContactsForm__btn">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
