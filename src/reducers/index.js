import { combineReducers } from 'redux';

// import
import booksReducer from './books';
import cartsReducer from './carts';
import cartReducer from './cart';

const reducers = combineReducers({
    books: booksReducer,
    carts: cartsReducer,
    cartModal: cartReducer,
});

export default reducers