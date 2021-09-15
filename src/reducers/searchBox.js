const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'modifySearch':
            console.log(action)
            state = action.data;
            break;
        default:
            break;
    }
    return state;
}

export default searchReducer;