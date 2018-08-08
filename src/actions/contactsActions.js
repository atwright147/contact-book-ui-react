import axios from 'axios';
import { actions as rrfActions } from 'react-redux-form';

const getContactsAll = () =>
    (dispatch) => 
        axios
            .get('/api/contacts')
            .then((res) => {
                dispatch({ type: 'contacts/GET_ALL', items: res.data });
            })
            .catch((err) => {
                console.error(err);
            });

const get = (id) =>
    (dispatch) => {
        dispatch({ type: 'getContact/STARTED' });
        dispatch(rrfActions.reset('dynamic'));

        return axios.get(`/api/contact/${id}`)
            .then((response) => {
                dispatch(rrfActions.merge('dynamic', response.data));
                dispatch({ type: 'getContact/STARTED' });
            })
            .catch((error) => {
                console.error(error);
                dispatch({ type: 'getContact/FAILED' })
            })
    }

export default { getContactsAll, get };
