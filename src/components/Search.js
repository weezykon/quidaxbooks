import React, { useState } from 'react'
import searchIcon from './../assets/images/search.svg';
import closeIcon from './../assets/images/close.svg';
import { quickSearch } from './cartQuery';


import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults, setIsSearching } from '../actions';

const Search = () => {
    const [search, setSearch] = useState('');
    const { isSearching, books } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSearchInputChanges = (e) => {
        dispatch(setIsSearching(true));
        setSearch(e.target.value);
        const searchResults = quickSearch(books, e.target.value);
        dispatch(setSearchResults({books: searchResults, keywords: e.target.value}));

        // check if search is empty
        if (e.target.value === '') {
            dispatch(setIsSearching(false));
            setSearchResults([]);
        }
    }

    const closeSearch = () => {
        dispatch(setIsSearching(false));
        setSearch('');
    }
    return (
        <>
            <input type="text" value={search} onChange={handleSearchInputChanges} placeholder="Search books, genres, authors, etc." className="bg-white border border-gray py-2 px-4 block w-half appearance-none leading-normal" />
            {!isSearching ? (
                <button className="w-11 bg-gray-100 border-t border-r border-b border-l-0 border-gray flex justify-center items-center">
                    <img src={searchIcon} alt="Search Icon" />
                </button>
            ) : (
                <button onClick={closeSearch} className="w-11 bg-gray-100 border-t border-r border-b border-l-0 border-gray flex justify-center items-center">
                    <img src={closeIcon} alt="Close Icon" />
                </button>
            )}
        </>
    )
}

export default Search
