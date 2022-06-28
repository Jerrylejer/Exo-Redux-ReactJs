import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tv from '../images/tv.png';
import buyTv from '../redux/tv/actionTv';

function TvContainer() {

    const tvs = useSelector((state) => state.television.tvs);
    const dispatch = useDispatch();

    const[tvQuantity, setTvQuantity] = useState(1);
    console.log(tvQuantity);

    return (
        <div className='container'>
            <img src={tv} alt='tv' />
            Disponibilité:
            <p>
                <span id='count'>{tvs}</span>
            </p>
            <div className='btn__container'>
                <button onClick={() => dispatch(buyTv(tvQuantity))}>Acheter</button>
                <input type='text' value={tvQuantity} onChange={e => setTvQuantity(e.target.value)}/>
            </div>
        </div>
    );
}
export default TvContainer;

// Méthodes mapStateToProps & mapDispatchToProps

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import tv from '../images/tv.png';
// import buyTv  from '../redux/tv/actionTv';

// function TvContainer(props) {
//  console.log(props);

//  const[tvQuantity, setTvQuantity] = useState(1);
//  console.log(tvQuantity);

//     return (
//         <div className='container'>
//             <img src={tv} alt='tv' />
//             Disponibilité:
//             <p>
//                 <span id='count'>{props.tvs}</span>
//             </p>
//             <div className='btn__container'>
//                  <button onClick={() => props.buyTv(tvQuantity)}>Acheter</button>
//                  <input type="text" value ={tvQuantity} onChange={e => setTvQuantity(e.target.value)} />
//              </div>
//         </div>
//     );
// }

// const mapStateToProps = state => {
//  return {
//      tvs: state.television.tvs
//  }
// }

// const mapDispatchToProps = dispatch => {
//  return {
//      buytv: tvQuantity => dispatch(buyTv(tvQuantity))
//  }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TvContainer);
