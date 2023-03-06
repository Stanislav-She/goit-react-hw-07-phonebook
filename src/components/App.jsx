// import React, { useState, useEffect } from 'react';

// import { nanoid } from 'nanoid';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import AppStyle from './AppStyle.module.css';
import { FilterContact } from './FiltrContact/FilterContact';
import { ListContact } from './ListContact/ListContact';
import { FormContact } from './FormContact/FormContact';
// import {
//   addContact,
//   filterContacts,
//   removeContacts,
// } from './redux/sliceContacts';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from './redux/contactsSelector';

// const CONTACTS_KEY = 'contacts';

export const App = () => {
  // const parsContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY));
  // const [contacts, setContacts] = useState(
  //   () =>
  //     parsContacts ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //       { id: 'id-5', name: 'Ihor Kalyta', number: '577-99-77' },
  //     ]
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = contact => {
  //   const newContact = {
  //     name: contact.name,
  //     number: contact.number,
  //     id: nanoid(),
  //   };

  //   if (contacts.some(event => event.name === contact.name)) {
  //     toast.info(`${contact.name} is already in contacts.`);
  //   } else {
  //     toast.success(`${contact.name} added to contacts.`);
  //     return setContacts(prevState => [newContact, ...prevState]);
  //   }
  // };

  // const filterContacts = event => {
  //   setFilter(event.currentTarget.value);
  //   if (event.currentTarget.value.length > 0) {
  //     toast.warn(
  //       `The following matches were found for the query " ${event.currentTarget.value} ".`
  //     );
  //   }
  // };

  // const getContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const removeContacts = (contactId, name) => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  //   toast.error(`${name} deleted from contacts.`);
  // };

  return (
    <div className={AppStyle.container}>
      <h1 className={AppStyle.primeryTitle}>Phonebook</h1>
      <FormContact />
      {/* <ToastContainer /> */}
      <h2 className={AppStyle.secondaryTitle}>Contacts </h2>
      <FilterContact />
      <ListContact />
    </div>
  );
};
