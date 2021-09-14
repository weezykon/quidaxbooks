import React, { useState } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import backArrowIcon from './../assets/images/back-arrow.svg';
import cartIcon from './../assets/images/cart-white.svg';
import cartBlackIcon from './../assets/images/cart.svg';
import bookImg from './../assets/images/effective_engineer.png';
import userIcon from './../assets/images/user.svg';
import heartIcon from './../assets/images/heart.svg';

// components
import CartItem from './../components/CartItem';

function Book() {
    // use state
    const [cartModal, setCartModal] = useState(false);

    // disable scroll once modal is open
    if (cartModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    // close modal function
    const closeModal = () => {
        setCartModal(false);
    }
    return (
        <>
            <div className="book-page">
                <div className="navigation">
                    <NavLink to="/">
                        <span><img src={backArrowIcon} alt="cart" /> <span className="font-semibold mx-3">Back</span></span>
                    </NavLink>
                </div>
                <div className="book">
                    <div className="book-cover">
                        <img src={bookImg} alt="book" />
                        {cartModal}
                        <p className="text-green">23 Copies Available</p>
                        <p className="text-price">$29.99</p>
                        {/* onClick={() => { setCartModal(!cartModal) }} */}
                        <button onClick={() => { setCartModal(!cartModal) }}>
                            <img src={cartIcon} alt="cart" className="white-cart-icon" />
                            <img src={cartBlackIcon} alt="cart" className="black-cart-icon" />
                            <span>Add to Cart</span>
                        </button>
                    </div>

                    <div className="book-content">
                        <div className="book-details">
                            <h2 className="title">Big Magic: Creative Living Beyond Fear</h2>
                            <p className="author">Elizabeth Gilbert</p>
                            <p className="year">2016</p>
                        </div>
                        <div className="book-rating">
                            <div className="flex flex-column user">
                                <img src={userIcon} alt="user" />
                                <p>31</p>
                            </div>
                            <div className="flex flex-column heart mx-3">
                                <img src={heartIcon} alt="heart" />
                                <p>29</p>
                            </div>
                            <div className="flex flex-column rating-box">
                                <p><b>Rating:</b> 4.0 </p>
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
                            <div className="book-type">
                                <div className="flex flex-column">
                                    <p className="font-semibold">Genre</p>
                                    <p>Motivational</p>
                                </div>
                                <div className="flex flex-column">
                                    <p className="font-semibold">Tags</p>
                                    <p>Creativity, Better Living</p>
                                </div>
                                <div className="flex flex-column">
                                    <p className="font-semibold">Publishing</p>
                                    <p>Savannah Books</p>
                                </div>
                                <div className="flex flex-column">
                                    <p className="font-semibold">Released</p>
                                    <p>21 January, 2016</p>
                                </div>
                            </div>
                        </div>
                        <div className="book-description">
                            <p>
                                <b>The instant #1 NEW YORK TIMES Bestseller</b> <br /><br />

                                "A must read for anyone hoping to live a creative life... I dare you not to be inspired to be brave, to be free, and to be curious.” —PopSugar <br /><br />

                                From the worldwide bestselling author of Eat Pray Love and City of Girls: the path to the vibrant, fulfilling life you’ve dreamed of. <br /><br />

                                Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. Now this beloved author digs deep into her own generative process to share her wisdom and unique perspective about creativity. With profound empathy and radiant generosity, she offers potent insights into the mysterious nature of inspiration. She asks us to embrace our curiosity and let go of needless suffering. She shows us how to tackle what we most love, and how to face down what we most fear. She discusses the attitudes, approaches, and habits we need in order to live our most creative lives. Balancing between soulful spirituality and cheerful pragmatism, Gilbert encourages us to uncover the “strange jewels” that are hidden within each of us. Whether we are looking to write a book, make art, find new ways to address challenges in our work,  embark on a dream long deferred, or simply infuse our everyday lives with more mindfulness and passion, Big Magic cracks open a world of wonder and joy. <br /><br />

                                "A must read for anyone hoping to live a creative life... I dare you not to be inspired to be brave, to be free, and to be curious.” —PopSugar <br /><br />

                                From the worldwide bestselling author of Eat Pray Love and City of Girls: the path to the vibrant, fulfilling life you’ve dreamed of.<br /><br />

                                Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. Now this beloved author digs deep into her own generative process to share her wisdom and unique perspective about creativity. With profound empathy and radiant generosity, she offers potent insights into the mysterious nature of inspiration. She asks us to embrace our curiosity and let go of needless suffering. She shows us how to tackle what we most love, and how to face down what we most fear. She discusses the attitudes, approaches, and habits we need in order to live our most creative lives. Balancing between soulful spirituality and cheerful pragmatism, Gilbert encourages us to uncover the “strange jewels” that are hidden within each of us. Whether we are looking to write a book, make art, find new ways to address challenges in our work,  embark on a dream long deferred, or simply infuse our everyday lives with more mindfulness and passion, Big Magic cracks open a world of wonder and joy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={cartModal}
                // contentLabel="Minimal Modal Example"
                className="cart-modal"
                overlayClassName="overlay"
                ariaHideApp={false}
                onRequestClose={() => { setCartModal(false) }}
            >
                <section className="modal-content">
                    <div className="modal-header">
                        <div className="closeModal">
                            <img src={backArrowIcon} alt="cart" /> <span className="font-medium mx-3">Back</span>
                        </div>
                        <div className="cart">
                            <span className="font-medium">Your Cart</span> <img src={cartBlackIcon} class="mx-3" alt="cart" />
                        </div>
                    </div>

                    <div className="modal-body">
                        <CartItem />
                    </div>
                </section>
            </Modal>
        </>
    )
}

export default Book
