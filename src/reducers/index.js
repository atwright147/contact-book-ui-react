import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { routerReducer } from 'react-router-redux';

import contacts from './contactsReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    contacts,
    ...createForms({
        dynamic: {},
    }),
});

export default rootReducer;
