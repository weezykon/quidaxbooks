import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { GET_BOOK } from '../client/queries';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import backArrowIcon from './../assets/images/back-arrow.svg';
import cartIcon from './../assets/images/cart-white.svg';
import cartBlackIcon from './../assets/images/cart.svg';

// components
import CartItem from './../components/CartItem';
import BookDetails from './../components/BookDetails';

const Book = () => {
    // get id from params
    const { id } = useParams();

    // use state
    const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });
    const [cartModal, setCartModal] = useState(false);
    const [book, setBook] = useState({});

    useEffect(() => {
        if (data) {
            setBook(data.book);
        }
    }, [data]);

    // disable scroll once modal is open
    if (cartModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    // close modal function
    const closeModal = () => {
        setCartModal(false);
    }
    return (
        <>
            <section className="book-page">
                <div className="navigation">
                    <NavLink to="/">
                        <span><img src={backArrowIcon} alt="cart" /> <span className="font-semibold mx-3">Back</span></span>
                    </NavLink>
                </div>
                <BookDetails book={book} />
            </section>
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
