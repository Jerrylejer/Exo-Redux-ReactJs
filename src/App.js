import React from 'react';
import { Provider } from 'react-redux';
import PhoneContainer from './components/PhoneContainer';
import TvContainer from './components/TvContainer';
import store from './redux/store';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className='section-one'>
                <div className='phone__container'>
                    <PhoneContainer />
                </div>
                <div className='tv__container'>
                    <TvContainer />
                </div>
            </div>
        </Provider>
    );
}
export default App;
