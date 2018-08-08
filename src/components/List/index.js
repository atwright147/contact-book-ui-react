import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import List from './List.js';

const mapStateToProps = (state) => ({
    items: state.contacts.all
});

const mapDispatchToProps = (dispatch) => ({
    onClickRowHandler: id => dispatch(push(`/contact/${id}/edit`))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
