// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import warehousesReducer from './Features/warehousesSlice';

export const store = configureStore({
  reducer: {
    warehouses: warehousesReducer,
  },
});
