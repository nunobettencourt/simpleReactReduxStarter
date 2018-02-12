import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers, reduxDevTools)}>
    <App />
    </Provider>
    , document.querySelector('#main'));
