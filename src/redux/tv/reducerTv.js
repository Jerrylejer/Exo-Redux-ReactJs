import { BUY_TV } from './type';

const tvInitialState = {
    tvs: 9,
};

// Reducer
const reducerTv = (state = tvInitialState, action) => {
    switch(action.type) {
        case BUY_TV:
        return {
            ...state,
            tvs: state.tvs -1
        }
        default: return state
    }
}

export default reducerTv;