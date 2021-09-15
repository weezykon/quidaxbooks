import react from "react";
import { NavLink } from 'react-router-dom';
import logo from './../assets/images/logo.svg';
import bookIcon from './../assets/images/book.svg';
import cartIcon from './../assets/images/cart.svg';
import Search from './Search';

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
                        <Search />
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
