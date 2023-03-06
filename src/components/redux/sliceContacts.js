import { createSlice } from '@reduxjs/toolkit';
import { availableContacts } from './availableContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: availableContacts, filtered: '' },
  // initialState - початковий стан стейту
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    filterContacts(state, action) {
      state.filtered = action.payload;
    },
    removeContacts(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, filterContacts, removeContacts } =
  contactsSlice.actions;
// нам потрібні екшени аби ми їх могли викликати в компоненті, для цього робимо деструктиризацію
// contactsSlice (звертаємось до об'єкту actions і забираємо всі екшени). Під капотом у функції
// createSlice створюються екшени, використовується createReducer, якось підключається бібліотека Immer.
// Дістаємо 3 екшени таекспортуємо їх та змінюємо імпорт в нашому компоненті.
