import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../Reducers/locationReducer';

const store = configureStore({
  reducer: {
     locationReducer
  },
});

export default store;
