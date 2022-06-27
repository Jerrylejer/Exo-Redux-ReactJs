import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phone from '../images/phone.png';
import buyPhone from '../redux/phone/actionPhone';

function PhoneContainer() {

    const phones = useSelector((state) => state.phone.phones);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <img src={phone} alt='phone' />
            Disponibilité:
            <p>
                <span id='count'>{phones}</span>
            </p>
            <button onClick={() => dispatch(buyPhone())}>Acheter</button>
        </div>
    );
}
export default PhoneContainer;

// Méthodes mapStateToProps & mapDispatchToProps
// import React from 'react';
// import { connect } from 'react-redux';
// import phone from '../../images/phone.png';
// import buyPhone from '../../redux/mobility/mobilityAction';

// function PhoneComponent(props) {
//     return (
//         <div className="container">
//             <img src={phone} alt="phone" />
//             Disponibilité:
//             <p><span id="count">{props.phones}</span></p>
//             <button onClick={() =>props.buyPhone()}>Acheter</button>
//         </div>
//     )
// };

// const mapStateToProps = (state) => {
//     return {
//         phones: state.phones,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyPhone: () => dispatch(buyPhone())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
