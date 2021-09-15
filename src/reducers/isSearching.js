const isSearchingReducer = (state = false, action) => {
    switch (action.type) {
        case 'isSearching':
            state = action.data;
            break;
        default:
            break;
    }
    return state;
}

export default isSearchingReducer;