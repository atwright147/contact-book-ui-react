import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import List from './components/List';
import configureStore from './store/configureStore';
import * as listActions from './actions/listActions';

import './styles/base.scss'

const initialState = {
    listItems: [],
}

const store = configureStore(initialState);

// initialise
store.dispatch(listActions.updateListItems());

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    document.getElementById('root')
);
