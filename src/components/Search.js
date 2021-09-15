import React, { useState } from 'react'
import searchIcon from './../assets/images/search.svg';
import closeIcon from './../assets/images/close.svg';
import { quickSearch } from './cartQuery';
import { useHistory, useLocation } from "react-router-dom"


import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults, setIsSearching } from '../actions';

const Search = () => {
    const [search, setSearch] = useState('');
    const [started, setStarted] = useState(false);
    const { isSearching, books } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory()
    const location = useLocation() 

    const handleSearchInputChanges = (e) => {
        console.log(e.target.value)
        if(!started) {
            redirectToSearch();
            console.log(started, 'moved')
            setStarted(true);
        }
        dispatch(setIsSearching(true));
        setSearch(e.target.value);
        const searchResults = quickSearch(books, e.target.value);
        dispatch(setSearchResults({books: searchResults, keywords: e.target.value}));

        // check if search is empty
        if (e.target.value === '') {
            dispatch(setIsSearching(false));
            setSearchResults([]);
            setStarted(false);
            history.push("/")
        }
    }

    const redirectToSearch = () => {
        if (location.pathname !== "/search") {
            history.push("/search")
        }
    }

    const closeSearch = () => {
        dispatch(setIsSearching(false));
        setSearch('');
        setStarted(false);
        history.push("/")
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
