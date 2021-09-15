const booksReducer = (state = [], action) => {
    switch (action.type) {
        case 'modifyBooks':
            state = action.data;
            break;
        default:
            break;
    }
    return state;
}

export default booksReducer;