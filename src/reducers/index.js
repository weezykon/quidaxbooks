import { combineReducers } from 'redux';

// import
import booksReducer from './books';
import cartsReducer from './carts';
import cartReducer from './cart';
import isSearchingReducer from './isSearching';
import searchResultReducer from './searchBox';

const reducers = combineReducers({
    books: booksReducer,
    carts: cartsReducer,
    cartModal: cartReducer,
    isSearching: isSearchingReducer,
    searchResults: searchResultReducer,
});

export default reducers