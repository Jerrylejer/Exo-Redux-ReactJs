import { BUY_PHONE } from './type';

// Notre state de base
const phoneInitialState = {
    phones: 5,
};

// Reducer
const reducerPhone = (state = phoneInitialState, action) => {
    switch(action.type) {
        case BUY_PHONE:
        return {
            ...state,
            phones: state.phones - action.payload
        }
        default: return state
    }
}

export default reducerPhone;