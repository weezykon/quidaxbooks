import React from 'react'
import { NavLink } from 'react-router-dom';

const SlideItem = ({ book }) => {
    return (
        <>
            <NavLink to={'book/' + book.id}>
                <div className="slide-item">
                    <img src={book.image_url} alt={book.title} />
                </div>
            </NavLink>
        </>
    )
}

export default SlideItem
