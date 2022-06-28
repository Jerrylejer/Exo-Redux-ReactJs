import { BUY_PHONE } from './type';

const buyPhone = (phoneQuantity) =>  {
    return {
        type: BUY_PHONE,
        payload: phoneQuantity
    };
};

export default buyPhone;