import axios from 'axios';

export const getContactsAll = () =>
    (dispatch) => 
        axios
            .get('/api/contacts')
            .then((res) => {
                dispatch({ type: 'contacts/GET_ALL', items: res.data });
            })
            .catch((err) => {
                console.error(err);  // eslint-disable-line no-console
            })
    }
}
