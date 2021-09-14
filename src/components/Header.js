import react from "react";
import { NavLink  } from 'react-router-dom';
import logo from './../assets/images/logo.svg';
import bookIcon from './../assets/images/book.svg';
import cartIcon from './../assets/images/cart.svg';
import searchIcon from './../assets/images/search.svg';
// import closeIcon from './../assets/images/close.svg';

function Header() {
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
                        <div className="relative flex ml-8 w-8">
                            <img src={cartIcon} alt="Cart Icon" />
                            <div className="counter">
                                3
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
