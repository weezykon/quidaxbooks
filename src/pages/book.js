import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_BOOK } from '../client/queries';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import backArrowIcon from './../assets/images/back-arrow.svg';
import Loader from '../components/Loader';

// components
import BookDetails from './../components/BookDetails';

const Book = () => {
    // get id from params
    const { id } = useParams();

    // use state
    const { loading, data } = useQuery(GET_BOOK, { variables: { id } });
    const [book, setBook] = useState({});

    useEffect(() => {
        if (data) {
            setBook(data.book);
        }
    }, [data]);
    return (
        <section className="container">
            <div className="book-page">
                <div className="navigation">
                    <NavLink to="/">
                        <span><img src={backArrowIcon} alt="cart" /> <span className="font-semibold mx-3">Back</span></span>
                    </NavLink>
                </div>
                {loading && (
                    <Loader />
                )}
                {book ? (
                    <BookDetails book={book} />
                ) : ('')}
            </div>
        </section>
    )
}

export default Book
