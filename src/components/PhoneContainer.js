import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phone from '../images/phone.png';
import buyPhone from '../redux/phone/actionPhone';

function PhoneContainer() {
    const phones = useSelector((state) => state.phone.phones);
    const dispatch = useDispatch();

    const [phoneQuantity, setPhoneQuantity] = useState(1);
    console.log('quantity :', phoneQuantity);

    return (
        <div className='container'>
            <img src={phone} alt='phone' />
            Disponibilité:
            <p>
                <span id='count'>{phones}</span>
            </p>
            <div className='btn__container'>
                <button onClick={() => dispatch(buyPhone(phoneQuantity))}>
                    Acheter
                </button>
                <input
                    type='text'
                    value={phoneQuantity}
                    onChange={(e) => setPhoneQuantity(e.target.value)}
                />
            </div>
        </div>
    );
}
export default PhoneContainer;

// Méthodes mapStateToProps & mapDispatchToProps

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import phone from '../images/phone.png';
// import buyPhone from '../redux/phone/actionPhone';

// function PhoneContainer (props) {

//     const [phoneQuantity, setPhoneQuantity] = useState(1);
//     console.log('quantity :', phoneQuantity);

//     return (
//         <div className="container">
//             <img src={phone} alt="phone" />
//             Disponibilité:

//             <p><span id="count">{props.phones}</span></p>

//             <div className='btn__container'>
//                  <button onClick={() => props.buyPhone(phoneQuantity)}>Acheter</button>
//                  <input type="text" value ={phoneQuantity} onChange={e => setPhoneQuantity(e.target.value)} />
//              </div>
//         </div>
//     )
// };

// const mapStateToProps = (state) => {
//     return {
//         phones: state.phone.phones,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyPhone: phoneQuantity => dispatch(buyPhone(phoneQuantity))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);
