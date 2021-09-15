import React, { useState } from 'react'
import Modal from 'react-modal';
import backArrowIcon from './../assets/images/back-arrow.svg';
import cartBlackIcon from './../assets/images/cart.svg';
import cartIcon from './../assets/images/cart-white.svg';

// components
import CartItem from './../components/CartItem';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCartBox } from './../actions';

const CartModal = () => {
    const { cartModal, carts } = useSelector(state => state);
    const dispatch = useDispatch();

    // disable scroll once modal is open
    if (cartModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    // close modal function
    const closeModal = () => {
        dispatch(setCartBox(false))
    }
    return (
        <>

            <Modal
                isOpen={cartModal}
                // contentLabel="Minimal Modal Example"
                className="cart-modal"
                overlayClassName="overlay"
                ariaHideApp={false}
                onRequestClose={() => { closeModal() }}
            >
                <section className="modal-content">
                    <div className="modal-header">
                        <div className="closeModal" onClick={() => { closeModal() }}>
                            <img src={backArrowIcon} alt="cart" /> <span className="font-medium mx-3">Back</span>
                        </div>
                        <div className="cart">
                            <span className="font-medium">Your Cart</span> <img src={cartBlackIcon} className="mx-3" alt="cart" />
                        </div>
                    </div>

                    <div className="modal-body">
                        {carts.length > 0 ? (
                            <>
                                {carts.map((cart, i) => <CartItem cart={cart} key={i} />)}
                            </>
                        ) : (
                            <div className="empty-cart">
                                <img src={cartBlackIcon} alt="cart" />
                                <span className="font-medium">Your cart is empty</span>
                            </div>
                        )}

                        {carts.length > 0 ? (
                            <div className="checkout">
                                <div className="subtotal">
                                    <span className="font-light text">Subtotal</span>
                                    <span className="font-light price">${carts.reduce((a, b) => a + b.book.price * b.quantity , 0)}</span>
                                </div>
                                <button>
                                    <img src={cartIcon} alt="cart" className="white-cart-icon" />
                                    <img src={cartBlackIcon} alt="cart" className="black-cart-icon" />
                                    <span>Proceed to Checkout</span>
                                </button>
                            </div>
                        ) : ('')}
                    </div>
                </section>
            </Modal>
        </>
    )
}

export default CartModal
