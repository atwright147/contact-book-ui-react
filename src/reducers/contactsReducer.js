export default (state = [], action) => {
    switch(action.type) {
        case 'contacts/GET_ALL':
            return Object.assign(
                {},
                state,
                { all: action.items }
            );

        default:
            return state;
    }
}
