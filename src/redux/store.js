import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import reducerPhone from './phone/reducerPhone';
import reducerTv from './tv/reducerTv';
import reducerComments from './comment/reducerComment';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    phone: reducerPhone,
    television: reducerTv,
    comment: reducerComments
})

const store = configureStore({
    reducer: rootReducer},
    applyMiddleware(thunk)
);

export default store;