import React from 'react';
import { Provider } from 'react-redux';
import PhoneContainer from './components/PhoneContainer';
import TvContainer from './components/TvContainer';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className='section-one'>
                <PhoneContainer />
                <TvContainer />
            </div>
        </Provider>
    );
}
export default App;
