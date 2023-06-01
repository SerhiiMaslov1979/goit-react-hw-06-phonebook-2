// import { configureStore } from '@reduxjs/toolkit';
// import { myValueSlice } from './myValue/slice';
// import { itemsSlice } from './itemsSlice/slice';

// export const store = configureStore({
//   reducer: {
//     myValue: myValueSlice.reducer,
//     items: itemsSlice.reducer,
//   },
// });

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import filterReducer from '../redux/Filter/filterSlice';

import { persistedContactsReducer } from '../redux/Contacts/contactsSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const finalReducer = combineReducers({
  contacts: persistedContactsReducer,
  filter: filterReducer,
});
export const store = configureStore({
  reducer: finalReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
