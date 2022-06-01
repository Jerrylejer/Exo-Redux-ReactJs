import { BUY_PHONE } from './type';

const mobilityInitialState = {
    phones: 5,
    tablets: 10
};

// Reducer
const mobilityReducer = (state = mobilityInitialState, action) => {
    switch(action.type) {
        case BUY_PHONE:
        return {
            ...state,
            phones: state.phones -1
        }
        default: return state
    }
}

export default mobilityReducer;