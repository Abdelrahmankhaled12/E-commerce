import './style.scss'
import logo from '../../../assets/logo.avif'
import SearchBar from '../../searchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus , faBars } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { useState } from 'react';
import Cart from '../../cart/Cart';
import SideBar from '../sidebar/SideBar'
import { useNavigate } from "react-router-dom";


const HeaderPartTwo = ({ products }) => {
    
    const { products:productCart } = useSelector((state) => state.cart);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="header_two">
                <div className="div">
                    <div className='content_headerTwo'>
                        <div className="sidebarMenuMobile">
                            <FontAwesomeIcon icon={faBars} onClick={() => setIsOpenMenu(true)} />
                        </div>
                        <img src={logo} onClick={()=>navigate("/")} style={{"cursor":"pointer"}} />
                        <div className="searchbar">
                            <SearchBar data={products} />
                        </div>
                        <div className="cart_button" onClick={() => setIsOpenCart(true)}>
                            <div className="counter_cart">
                                <p>{productCart.length}</p>
                            </div>
                            <button>
                                <FontAwesomeIcon icon={faCartPlus} />
                            </button>
                            <p>Your Cart</p>
                        </div>
                    </div>
                    <div className="searchMobile">
                        <SearchBar data={products} />
                    </div>
                </div>
            </div>
            <SideBar isOpenMenu={isOpenMenu} closeModalMenu={() => setIsOpenMenu(false)} />
            <Cart isOpenCart={isOpenCart} closeModalCart={() => setIsOpenCart(false)} />
        </>
    )
}

export default HeaderPartTwo