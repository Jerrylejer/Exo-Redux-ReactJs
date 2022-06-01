import { configureStore } from 'redux';
import mobilityReducer from './mobility/mobilityReducer';

const store = configureStore(mobilityReducer);

export default store;