import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers';

export default (initialState) => (
    createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            applyMiddleware(routerMiddleware(browserHistory)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
);
