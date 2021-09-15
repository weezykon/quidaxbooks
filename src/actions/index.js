export const setBooks = (data) => {
    return {
        type: 'modifyBooks',
        data
    };
};

export const setCarts = (data) => {
    return {
        type: 'modifyCart',
        data
    };
};

export const setCartBox = (data) => {
    return {
        type: 'modifyModal',
        data
    };
};

export const REMOVE_CART_ITEM = (data) => {
    return {
        type: 'removeCartItem',
        data
    };
}

export const INCREASE_CART_ITEM = (data) => {
    return {
        type: 'increaseCartItem',
        data
    };
}

export const DECREASE_CART_ITEM = (data) => {
    return {
        type: 'decreaseCartItem',
        data
    };
}