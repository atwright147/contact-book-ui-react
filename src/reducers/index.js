import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import contacts from './contactsReducer';

const rootReducer = combineReducers({
    contacts,
    ...createForms({
        dynamic: {},
    }),
});

export default rootReducer;
