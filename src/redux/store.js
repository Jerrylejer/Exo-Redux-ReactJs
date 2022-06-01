import { configureStore } from '@reduxjs/toolkit';
import mobilityReducer from './mobility/mobilityReducer';

const store = configureStore({reducer: mobilityReducer});

export default store;