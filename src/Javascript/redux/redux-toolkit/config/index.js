import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { attachmentStorageReducer } from './attachment-information/attachment-storage-information-reducer';


const reducer = {
  attachmentStorageInformation: attachmentStorageReducer,
};

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };