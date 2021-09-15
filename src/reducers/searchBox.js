const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'modifySearch':
            state = action.data;
            break;
        default:
            break;
    }
    return state;
}

export default searchReducer;