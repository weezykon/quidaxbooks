import React from 'react'
import Book from '../components/Book';

function home() {
    return (
        <section className="books">
            <div className="title">
                <p className="font-medium">All Books</p>
            </div>
            <section className="lists">
                <Book />
            </section>
        </section>
    )
}

export default home
