const cartsReducer = (state = [], action) => {
    switch (action.type) {
        case 'modifyCart':
            state = action.data;
            break;
        case 'removeCartItem':
            // remove item from state cart
            state = state.filter(item => {
                return item.book.id !== action.data
            });
            break;
        case 'increaseCartItem':
            // increase item quantity
            state = state.map(item => {
                if (item.book.id === action.data) {
                    item.quantity += 1;
                }
                return item;
            });
            break;
        case 'decreaseCartItem':
            // decrease item quantity but remove when quantity is 1
            state = state.map(item => {
                if (item.book.id === action.data) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    }
                }
                return item;
            });
            break;
        default:
            break;
    }
    return state;
}

export default cartsReducer;