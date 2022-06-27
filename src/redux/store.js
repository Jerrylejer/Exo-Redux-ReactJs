import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducerPhone from './phone/reducerPhone';
import reducerTv from './tv/reducerTv';

const rootReducer = combineReducers({
    phone: reducerPhone,
    television: reducerTv
})

const store = configureStore({reducer: rootReducer});

export default store;