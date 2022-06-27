import { BUY_PHONE } from './type';

const phoneInitialState = {
    phones: 5,
};

// Reducer
const reducerPhone = (state = phoneInitialState, action) => {
    switch(action.type) {
        case BUY_PHONE:
        return {
            ...state,
            phones: state.phones -1
        }
        default: return state
    }
}

export default reducerPhone;