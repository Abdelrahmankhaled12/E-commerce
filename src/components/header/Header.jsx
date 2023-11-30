import './header.scss'
import logo from '../../assets/logo.avif'
import SearchBar from '../searchBar/SearchBar'
import { useNavigate } from "react-router-dom";
import { header_links } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPenToSquare, faCartPlus, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { useState } from 'react';
import Cart from '../cart/Cart';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { products } = useSelector((state) => state.cart);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const { data, } = useFetch("admin/all_categories");
    const [active, setActive] = useState(location.pathname === "/" ? true : false)
    let { logged, userData } = useSelector((state) => state.login);
    console.log(logged, userData)

    return (
        <>
            <header id='top'>
                <div className="header_one">
                    <div className='content_headerOne'>
                        <div className="div">
                            {logged ? (
                                <p>Hello, {userData.name}</p>
                            ) : (
                                <p>Hello, Customer - <span onClick={() => navigate("/login")}> Sign in</span> or<span onClick={() => navigate("/register")}> Register</span></p>
                            )}
                        </div>
                        <div className="flex">
                            <p className='after'><FontAwesomeIcon icon={faLocationDot} style={{ "margin": "0px 10px" }} />Store Location</p>
                            <p><FontAwesomeIcon icon={faPenToSquare} style={{ "margin": "0px 10px" }} />Track Your Order</p>
                        </div>
                    </div>
                </div>
                <div className="header_two">
                    <div className='content_headerTwo'>
                        <img src={logo} />
                        <SearchBar />
                        <div className="cart_button" onClick={() => setIsOpenCart(true)}>
                            <div className="counter_cart">
                                <p>{products.length}</p>
                            </div>
                            <button>
                                <FontAwesomeIcon icon={faCartPlus} />
                            </button>
                            <p>Your Cart</p>
                        </div>
                    </div>
                </div>
                <div className="header_three">
                    <div className='content_headerThree'>
                        <ul className="menuItems">
                            {header_links.map(link => (
                                <li
                                    className="menuItem"
                                    key={link.title} onClick={() => navigate(link.router)}
                                >{link.title}</li>
                            ))}
                        </ul>
                        <div className='shop'>
                            <div
                                className="button_shop"
                                onClick={() => setActive(!active)}
                            >
                                <p>SHOP BY DEPARTMENT</p>
                                {active ? (
                                    <FontAwesomeIcon icon={faXmark} />
                                ) : (
                                    <FontAwesomeIcon icon={faBarsStaggered} />
                                )}
                            </div>
                            <ul
                                style={active ? { "opacity": "1" } : { "opacity": "0" }}
                            >
                                {data?.data.map((category) => (
                                    <li key={category.category_name}>{category.category_name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <Cart isOpenCart={isOpenCart} closeModalCart={() => setIsOpenCart(false)} />
        </>


    )
}

export default Header