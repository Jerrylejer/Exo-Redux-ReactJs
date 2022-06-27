import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tv from '../images/tv.png';
import buyTv from '../redux/tv/actionTv';

function TvContainer() {

    const tvs = useSelector((state) => state.television.tvs);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <img src={tv} alt='tv' />
            Disponibilité:
            <p>
                <span id='count'>{tvs}</span>
            </p>
            <button onClick={() => dispatch(buyTv())}>Acheter</button>
        </div>
    );
}
export default TvContainer;
