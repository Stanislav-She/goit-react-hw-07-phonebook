import React from 'react';
import ListModule from './ListContact.module.css';
import AddIcon from '../Icons/AddIcon.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSelector';
// import { removeContacts } from 'redux/contactsSlice';
import { deleteContact } from 'redux/backendAPI';

export const ListContact = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);

  const handleDelete = id => dispatch(deleteContact(id));

  const filteredContacts = contacts.filter(object =>
    object.name.toLowerCase().trim().includes(filter)
  );

  return (
    <ul className={ListModule.list}>
      {contacts && contacts.length > 0 ? (
        filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={ListModule.item}>
            <button
              type="button"
              className={ListModule.removeButton}
              onClick={() => {
                handleDelete(id);
              }}
              aria-label="Delete contact"
            >
              <AddIcon width="45" height="45" />
            </button>
            {name + ': ' + number}
          </li>
        ))
      ) : (
        <p className={ListModule.alert}>Sorry! You have no contacts created.</p>
      )}
    </ul>
  );
};
