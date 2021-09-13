// Render our root component to the Dom

import React from 'react';
import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers'

// This file is responsible for all of the redux setup
// All the kind of data setup of this application

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
    // The provider tag is a react component that knows how to read changes from the redux store.
    // Any time the redux store get some new state, it will produce inside of it, the Provider will informe all of its children components.
    // Will update the components with the new state.
    <Provider store={store}> <App /> </Provider>, 
    document.querySelector('#root')
    );

