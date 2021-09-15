import React from 'react'
import Book from '../components/Book';
// Redux
import { useSelector, useDispatch } from 'react-redux';

const SearchPage = () => {
    const { isSearching, searchResults } = useSelector(state => state);
    return (
        <>
            <section className="container">
                <div className="books">
                    <div className="title-head">
                        {(isSearching ) ? (
                            <p><b>{searchResults.books.length} results</b> found for <b>`{searchResults.keywords}`</b></p>
                        ) : ('')}
                    </div>
                    {isSearching && searchResults.books.length > 0 ? (
                        <section className="lists">
                            {searchResults.books.map(book => <Book book={book} key={book.id} />)}
                        </section>
                    ) : (
                        <section className="empty-search">
                            <p className="font-medium">No results found</p>
                        </section>
                    )}
                </div>
            </section>
        </>
    )
}

export default SearchPage
