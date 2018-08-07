import { connect } from 'react-redux';

import List from './List.js';

const mapStateToProps = (state) => {
    return { items: state.contacts.all }
}

export default connect(mapStateToProps)(List);
