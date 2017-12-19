import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Hookup up the app to the store with Provider and store. This allows the app to have access ("Provide access") to the store and the reducers and to compile correctly.
import { Provider } from 'react-redux';
import store from './store';

// Import HashRouter to allow for routing.
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();

