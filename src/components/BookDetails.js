import React from 'react'
import { Rating } from 'react-simple-star-rating'
import ReactMarkdown from 'react-markdown';
import userIcon from './../assets/images/user.svg';
import heartIcon from './../assets/images/heart.svg';
import cartIcon from './../assets/images/cart-white.svg';
import cartBlackIcon from './../assets/images/cart.svg';
import { addCart, getValues } from './cartQuery';

import { useSelector, useDispatch } from 'react-redux';
import { setCartBox, setCarts } from '../actions';

const BookDetails = ({ book }) => {
    const { carts } = useSelector(state => state);
    const dispatch = useDispatch();

    const addToCart = (book) => {
        const cartOperation = addCart(carts, book); 
        dispatch(setCarts(cartOperation.carts));
        if (cartOperation.new) {
            dispatch(setCartBox(true));
        }
    }
    return (
            <div className="book">
                    <div className="book-cover">
                        <img src={book.image_url} alt="book" />

                        <h2 className="mobile-title">{book.title}</h2>
                        {
                            book.available_copies > 0 ? (
                                <p className="text-green availability">{book.available_copies} Copies Available</p>
                            ) : (
                                <p className="text-red availability">Out of Stock</p>
                            )
                        }
                        <p className="text-price">${book.price}</p>
                        {book.available_copies > 0 ? (
                            <button onClick={() => { addToCart(book) }}>
                                <img src={cartIcon} alt="cart" className="white-cart-icon" />
                                <img src={cartBlackIcon} alt="cart" className="black-cart-icon" />
                                <span>Add to Cart</span>
                            </button>
                        ) : ('')}
                    </div>

                    <div className="fixedButton">
                        {book.available_copies > 0 ? (
                            <button onClick={() => { addToCart(book) }}>
                                <img src={cartIcon} alt="cart" className="white-cart-icon" />
                                <img src={cartBlackIcon} alt="cart" className="black-cart-icon" />
                                <span>Add to Cart <br/>
                                    <span className="text-green">{book.available_copies} Copies Available</span>
                                </span>
                                <span className="price">${book.price}</span>
                            </button>
                        ) : ('')}
                    </div>

                    <div className="book-content">
                        <div className="book-details">
                            <h2 className="title web-title">{book.title}</h2>
                            <p className="author">{getValues(book.authors)}</p>
                            <p className="year">{book.published_at ? book.published_at.slice(0, 4) : ''}</p>
                        </div>
                        <div className="book-rating">
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
                            <div className="book-type">
                                <div className="flex flex-column">
                                    <p className="font-semibold">Genre</p>
                                    <p>{getValues(book.genres)}</p>
                                </div>
                                <div className="flex flex-column">
                                    <p className="font-semibold">Tags</p>
                                    <p>{getValues(book.tags)}</p>
                                </div>
                                <div className="flex flex-column">
                                    <p className="font-semibold">Publishing</p>
                                    <p>{book.publisher}</p>
                                </div>
                                <div className="flex flex-column">
                                    <p className="font-semibold">Released</p>
                                    <p>{new Date(book.published_at).toDateString()}</p>
                                </div>
                            </div>
                        </div>
                        <div className="book-description">
                            <ReactMarkdown>{(book.full_description)}</ReactMarkdown>
                        </div>
                    </div>
                </div>
    )
}

export default BookDetails
