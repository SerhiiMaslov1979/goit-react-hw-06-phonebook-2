// import { configureStore } from '@reduxjs/toolkit';
// import { myValueSlice } from './myValue/slice';
// import { itemsSlice } from './itemsSlice/slice';

// export const store = configureStore({
//   reducer: {
//     myValue: myValueSlice.reducer,
//     items: itemsSlice.reducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
// import { persistedReducer } from './Contacts/contactsSlice';
import filterReducer from './Filter/filterSlice';
import { contactReduser } from './Contacts/contactsSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    // contacts: persistedReducer,
    contacts: contactReduser,
    filter: filterReducer,
  },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

// export const persistor = persistStore(store);
