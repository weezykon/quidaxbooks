import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_ALL_BOOKS } from '../client/queries';
import Book from '../components/Book';
import Loader from '../components/Loader';

function Home() {
    const { loading, error, data } = useQuery(GET_ALL_BOOKS);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (data) {
            setBooks(data.books);
        }
    }, [data]);

    return (
        <section className="books">
            <div className="title">
                <p className="font-medium">All Books</p>
            </div>
            <section className="lists">
                {loading && (
                    <Loader />
                )}
                {books.map(book => <Book book={book} key={book.id} />)}
            </section>
        </section>
    )
}

export default Home
