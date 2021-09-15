import react from "react";
import { NavLink } from 'react-router-dom';
import logo from './../assets/images/logo.svg';
import bookIcon from './../assets/images/book.svg';
import cartIcon from './../assets/images/cart.svg';
import searchIcon from './../assets/images/search.svg';
// import closeIcon from './../assets/images/close.svg';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCartBox } from './../actions';

function Header() {
    const { cartModal, carts } = useSelector(state => state);
    const dispatch = useDispatch();

    const openCart = () => {
        dispatch(setCartBox(true))
    }
    return (
        <>
            <header className="header bg-white border-b border-gray-100 px-4 shadow-sm">
                <section className="container h-24 flex justify-between items-center">
                    <div className="flex justify-start flex-3">
                        <NavLink to="/">
                            <span><img src={logo} alt="Quidax Logo" /></span>
                        </NavLink>
                        <div className="mx-3 title">
                            <h1 className="font-normal">Quidax Books</h1>
                            <p className="italic">A flimsy book company</p>
                        </div>
                    </div>
                    <div className="flex justify-center flex-1">
                        <input type="text" placeholder="Search books, genres, authors, etc." className="bg-white border border-gray py-2 px-4 block w-half appearance-none leading-normal" />
                        <button className="w-11 bg-gray-100 border-t border-r border-b border-l-0 border-gray flex justify-center items-center">
                            <img src={searchIcon} alt="Search Icon" />
                        </button>
                        {/* <button className="w-11 bg-gray-100 border-t border-r border-b border-gray-400 flex justify-center items-center">
                            <img src={closeIcon} alt="Close Icon" />
                        </button> */}
                    </div>
                    <div className="flex justify-end">
                        <div>
                            <img src={bookIcon} alt="Book Icon" />
                        </div>
                        <div className="relative flex ml-8 w-8 cart-box" onClick={() => { openCart() }}>
                            <img src={cartIcon} alt="Cart Icon" />
                            {carts.length > 0 ? (
                                <div className="counter">
                                    {
                                        carts.reduce((acc, curr) => acc + curr.quantity, 0)
                                    }
                                </div>
                            ) : ('')}
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
