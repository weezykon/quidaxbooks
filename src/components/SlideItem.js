import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { NavLink } from 'react-router-dom';
import userIcon from './../assets/images/userWhite.svg';
import heartIcon from './../assets/images/heartWhite.svg';

const SlideItem = ({ book }) => {
    return (
        <>
            <NavLink to={'book/' + book.id}>
                <div className="slide-item">
                    <img src={book.image_url} alt={book.title} />
                    <div className="slide-item-details">
                        <div className="available">
                            {book.available_copies > 0 ? (
                                <p className="text-green">Available</p> 
                            ): (
                                <p className="text-red">Out of Stock</p>
                            )}
                        </div>
                        <div className="author">
                            <h3>{book.title}</h3>
                            <p>{book.authors.map(genre => genre.name).join(', ')}</p>
                            <p className="year">{book.published_at.slice(0, 4)}</p>
                        </div>
                        <div className="genre">
                            <p className="font-semibold">Genre</p>
                            <p>{book.genres.map(genre => genre.name).join(', ')}</p>
                        </div>
                        <div className="tags">
                            <p className="font-semibold">Tags</p>
                            <p>{book.tags.map(tag => tag.name).join(', ')}</p>
                        </div>
                        <div className="rating">
                            <div className="flex flex-column user">
                                <img src={userIcon} alt="user" />
                                <p>{book.number_of_purchases}</p>
                            </div>
                            <div className="flex flex-column heart mx-3">
                                <img src={heartIcon} alt="heart" />
                                <p>{book.likes}</p>
                            </div>
                            <div className="flex flex-column rating-box">
                                <p><b>Rating:</b> {book.rating} </p>
                                <Rating ratingValue={Math.round(book.rating)} />
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default SlideItem
