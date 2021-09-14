import React from 'react'
import bookImg from './../assets/images/effective_engineer.png';
import userIcon from './../assets/images/user.svg';
import heartIcon from './../assets/images/heart.svg';
import cartIcon from './../assets/images/cart.svg';

function Book() {
    return (
        <>
            <div className="book flex">
                <div className="book-img">
                    <img src={bookImg} alt="book" />
                </div>
                <div className="book-info flex flex-column justify-around px-4">
                    <div className="author">
                        <p className="font-semibold title">The Effective Engineer</p>
                        <p className="font-small writer">Edmond Lau - 2009</p>
                        <p className="category">Motivational</p>
                    </div>
                    <div className="rating flex">
                        <div className="flex flex-column user">
                            <img src={userIcon} alt="user" />
                            <p>31</p>
                        </div>
                        <div className="flex flex-column heart mx-3">
                            <img src={heartIcon} alt="heart" />
                            <p>29</p>
                        </div>
                        <div className="flex flex-column rating-box">
                            <p>Rating: 4.0 </p>
                            <div className="star">
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
                            </div>
                        </div>
                    </div>
                    <div className="cart flex flex-column">
                        <div className="price">
                            <p>$29.99 <span className="text-green mx-3">23 Copies Available</span></p>
                        </div>
                        <div className="cart-btn">
                            <button className="">
                                <img src={cartIcon} alt="cart" />
                                <span className="mx-3">Add to Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book
