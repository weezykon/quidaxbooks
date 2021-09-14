import React from 'react';
import { Rating } from 'react-simple-star-rating'
import { NavLink } from 'react-router-dom';
import userIcon from './../assets/images/user.svg';
import heartIcon from './../assets/images/heart.svg';
import cartIcon from './../assets/images/cart.svg';

function Book({ book }) {
    const getValues = (items) => {
        if(items.length > 0) return items.map(item => item.name).join(', ')
        return ''
    }
    return (
        <NavLink to={'book/' + book.id}>
            <div className="book flex">
                <div className="book-img">
                    <img src={book.image_url} alt="book" />
                </div>
                <div className="book-info flex flex-column justify-around px-4">
                    <div className="author">
                        <p className="font-semibold title">{book.title}</p>
                        <p className="font-small writer">{getValues(book.authors)} - {new Date(book.published_at).getFullYear()}</p>
                        <p className="category">{getValues(book.tags)}</p>
                    </div>
                    <div className="rating flex">
                        <div className="flex flex-column user">
                            <img src={userIcon} alt="user" />
                            <p>{book.number_of_purchases}</p>
                        </div>
                        <div className="flex flex-column heart mx-3">
                            <img src={heartIcon} alt="heart" />
                            <p>{book.likes}</p>
                        </div>
                        <div className="flex flex-column rating-box">
                            <p>Rating: {book.rating} </p>
                            <Rating ratingValue={book.rating} /* Rating Props */ />
                            {/* <div className="star">
                                <input type="radio" name="rating" id="rating-5" />
                                <label htmlFor="rating-5"></label>
                                <input type="radio" name="rating" id="rating-4" />
                                <label htmlFor="rating-4"></label>
                                <input type="radio" name="rating" id="rating-3" />
                                <label htmlFor="rating-3"></label>
                                <input type="radio" name="rating" id="rating-2" />
                                <label htmlFor="rating-2"></label>
                                <input type="radio" name="rating" id="rating-1" />
                                <label htmlFor="rating-1"></label>
                            </div> */}
                        </div>
                    </div>
                    <div className="cart flex flex-column">
                        <div className="price">
                            <p>${book.price} 
                                {
                                    book.available_copies > 0 ? (
                                        <span className="text-green mx-3">{book.available_copies} Copies Available</span>
                                    ) : (
                                        <span className="text-red mx-3">Out of Stock</span>
                                    )
                                }
                            </p>
                        </div>
                        <div className="cart-btn">
                            {
                                book.available_copies > 0 ? (
                                    <button className="">
                                        <img src={cartIcon} alt="cart" />
                                        <span className="mx-3">Add to Cart</span>
                                    </button>
                                ) : ('')
                            }
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Book
