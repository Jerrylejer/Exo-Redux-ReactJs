import { BUY_TV } from './type';

// Notre state de base
const tvInitialState = {
    tvs: 9,
};

// Reducer
const reducerTv = (state = tvInitialState, action) => {
    switch(action.type) {
        case BUY_TV:
        return {
            ...state,
            tvs: state.tvs - action.payload
        }
        default: return state
    }
}

export default reducerTv;

