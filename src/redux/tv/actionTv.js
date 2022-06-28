import { BUY_TV } from './type';

const buyTv = (tvQuantity) => {
    return {
        type: BUY_TV,
        payload: tvQuantity
    }
};

export default buyTv;