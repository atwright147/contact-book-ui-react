import { connect } from 'react-redux';

import Form from './Form.js';
import contactsActions from '../../../actions/contactsActions.js';

export const mapDispatchToProps = (dispatch) => ({
    onSubmitHandler: () => dispatch(contactsActions.send())
});

export default connect(null, mapDispatchToProps)(Form);
