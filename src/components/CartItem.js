import React from 'react'
import bookImg from './../assets/images/effective_engineer.png';

function CartItem() {
    return (
        <>
            <div className="cart-item">
                <div className="cart-item-details">
                    <img src={bookImg} alt="book" />
                    <div className="cart-item-details-text">
                        <div className="book-author">
                            <p className="font-medium">The Big Magic</p>
                            <p className="">by Elizabeth Gilbert</p>
                        </div>
                        <button>Remove</button>
                    </div>
                </div>
                <div className="cart-price">
                    <div className="">
                        <p className="">$29.99</p>
                        <div className="modify-cart">
                            <div className="change-box"> - </div>
                            <div className="input-box"> 1 </div>
                            <div className="change-box"> + </div>
                        </div>
                    </div>
                    <p className="price font-medium">$59.98</p>
                </div>
            </div>
        </>
    )
}

export default CartItem
