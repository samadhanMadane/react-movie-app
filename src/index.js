import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {MoviesReducer} from './reducers/MoviesReducer';

const store = createStore(
    combineReducers({
        moviesReducer : MoviesReducer
    }),
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
