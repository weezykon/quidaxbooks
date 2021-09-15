import React from 'react'
import { getValues } from './cartQuery';

// Redux
import { useDispatch } from 'react-redux';
import { REMOVE_CART_ITEM, INCREASE_CART_ITEM, DECREASE_CART_ITEM } from './../actions';

function CartItem({ cart }) {
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(REMOVE_CART_ITEM(id))
    }

    const increaseItemQuantity = (id, qty, available) => {
        if (+qty + 1 <= available) {
            dispatch(INCREASE_CART_ITEM(id))
        }
    }

    const decreaseItemQuantity = (id, qty) => {
        if (qty > 1) {
            dispatch(DECREASE_CART_ITEM(id))
        } else {
            dispatch(REMOVE_CART_ITEM(id))
        }
    }
    return (
        <>
            <div className="cart-item">
                <div className="cart-item-details">
                    <img src={cart.book.image_url} alt="book" />
                    <div className="cart-item-details-text">
                        <div className="book-author">
                            <p className="font-medium">{cart.book.title}</p>
                            <p className="">by {getValues(cart.book.authors)}</p>
                        </div>
                        <button onClick={() => { removeItem(cart.book.id) }}>Remove</button>
                    </div>
                </div>
                <div className="cart-price">
                    <div className="">
                        <p className="">${cart.book.price}</p>
                        <div className="modify-cart">
                            <button className="change-box" onClick={() => decreaseItemQuantity(cart.book.id, cart.quantity)}> - </button>
                            <div className="input-box"> {cart.quantity} </div>
                            <button className="change-box" onClick={() => increaseItemQuantity(cart.book.id, cart.quantity, cart.book.available_copies)}> + </button>
                        </div>
                    </div>
                    <p className="price font-medium">${+cart.book.price * +cart.quantity}</p>
                </div>
            </div>
        </>
    )
}

export default CartItem
