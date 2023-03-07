// import { addContact } from 'redux/contactsSlice';
// import { nanoid } from 'nanoid';
import React, { useState } from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormModule from './FormContact.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from 'redux/contactsSelector';
import { addContact } from 'redux/backendAPI';

export const FormContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const contact = {
      name: name,
      number: number,
    };
    toast.success(`${contact.name} added to contacts.`);

    const hasContact = contacts.some(
      object => object.name.toLowerCase() === name.toLowerCase()
    );

    if (hasContact) {
      toast.warn(`There is the contact in your list`);
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={FormModule.form} onSubmit={onSubmit}>
        <label className={FormModule.lable}>
          <input
            className={FormModule.input}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputChange}
          />
        </label>
        <label className={FormModule.lable}>
          <input
            className={FormModule.input}
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputChange}
          />
        </label>
        <button type="submit" className={FormModule.button}>
          Add contact
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
