import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './styles/base.css';

import MainLayout from './components/Layouts/Main';
import Home from './components/Home';
import List from './components/List';
import ContactForm from './components/Forms/Contact';
import NoMatch from './components/NoMatch';

import configureStore from './store/configureStore';
import * as contactsActions from './actions/contactsActions';

const initialState = {
    contacts: [],
}

const store = configureStore(initialState);

// initialise
store.dispatch(contactsActions.getContactsAll());

ReactDOM.render(
    <Provider store={store}>
        <Router history={syncHistoryWithStore(browserHistory, store)}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={Home} />
                <Route path="contacts" component={List} />
                <Route path="contact/:id/edit" component={ContactForm} />
                <Route path="contact/create" component={ContactForm} />
                <Route path="*" component={NoMatch} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
