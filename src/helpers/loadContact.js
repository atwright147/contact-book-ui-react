import contactsActions from '../actions/contactsActions.js';

const loadContact = (store) =>
    (nextState, replace, next) =>
        store.dispatch(contactsActions.get(nextState.params.id))
            .then(() => next());

export default loadContact;
