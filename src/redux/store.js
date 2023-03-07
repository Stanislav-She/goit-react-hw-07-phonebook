import { configureStore } from '@reduxjs/toolkit';

// import { contactsReducer } from './contactsSlice';

// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   REGISTER,
//   PAUSE,
//   PERSIST,
//   PURGE,
// } from 'redux-persist';
// import { persistStore, persistReducer } from 'redux-persist';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   //   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// export const persistor = persistStore(store);
