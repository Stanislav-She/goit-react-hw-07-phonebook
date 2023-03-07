import React from 'react';
// import { getFiltered } from 'redux/contactsSelector';
// import { filterContacts } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import FilterModule from './FilterContact.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { getFilter } from 'redux/filterSlice';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state);

  const onChange = event => {
    dispatch(getFilter(event.target.value));
  };

  return (
    <label name="filter" className={FilterModule.label}>
      <input
        className={FilterModule.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Find contacts by name"
        onChange={event => {
          onChange(event);
        }}
        value={filter}
      />
      {/* <ToastContainer /> */}
    </label>
  );
};
