import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_BOOKS } from '../client/queries';
import Book from '../components/Book';
import Loader from '../components/Loader';
import FeaturedBooks from '../components/FeaturedBooks';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setBooks } from './../actions';

function Home() {
    const { loading, error, data } = useQuery(GET_ALL_BOOKS);

    const { books } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            // setBooks(data.books);
            dispatch(setBooks(data.books))
        }
    }, [data]);

    return (
        <>
            <section className="featured">
                <div className="title">
                    <p className="font-medium">Featured Books</p>
                </div>
                <div className="slider">
                    <FeaturedBooks books={books} />
                </div>
            </section>
            <section className="container">
                <div className="books">
                    <div className="title-head">
                        <p className="font-medium">All Books</p>
                    </div>
                    <section className="lists">
                        {loading && (
                            <Loader />
                        )}
                        {books.map(book => <Book book={book} key={book.id} />)}
                    </section>
                </div>
            </section>
        </>
    )
}

export default Home
