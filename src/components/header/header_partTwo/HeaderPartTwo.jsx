import './style.scss'
import logo from '../../../assets/logo.avif'
import SearchBar from '../../searchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import { useState } from 'react';
import Cart from '../../cart/Cart';
import SideBar from '../sidebar/SideBar'


const HeaderPartTwo = () => {
    const { products } = useSelector((state) => state.cart);
    const [isOpenCart, setIsOpenCart] = useState(false);


    return (
        <>
            <div className="header_two">
                <div className='content_headerTwo'>
                    <div className="sidebarMenuMobile">
                        <SideBar />
                    </div>
                    <img src={logo} />
                    <div className="searchbar">
                        <SearchBar />
                    </div>
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
            <Cart isOpenCart={isOpenCart} closeModalCart={() => setIsOpenCart(false)} />
        </>
    )
}

export default HeaderPartTwo