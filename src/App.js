import React from 'react';
import { Provider } from 'react-redux';
import PhoneComponent from './components/PhoneComponent/index';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className='section-one'>
                <PhoneComponent />
            </div>
        </Provider>
    );
}
export default App;
