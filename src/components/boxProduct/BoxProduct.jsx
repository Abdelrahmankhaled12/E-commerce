/* eslint-disable react/prop-types */
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Cart from '../cart/Cart'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProductCart } from '../../store/cartSlice'
import { useNavigate } from 'react-router-dom'
import ProductDetails from '../product_details/ProductDetails'

const BoxProduct = ({ product , style , widthImage }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [details, setDetails] = useState({});

    const [isOpenCart, setIsOpenCart] = useState(false);
    const dispatch = useDispatch();

    const addProductCart = (product) => {
        product.counter = 1;
        dispatch(setProductCart(product))
    }

    const navigate = useNavigate();


    return (
        <>
            <div className={`box_product ${style}`}>
                <div className="image">
                    <img src={product.image[0]} alt="" style={{"width":widthImage+"px"}}/>
                    <button className='search' onClick={() => { setDetails(product) ,  setIsOpen(true) }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div className="details">
                    <div className="category">
                        {product.category_name}
                    </div>
                    <h3 onClick={() => navigate(`/details/${product.category_name}/${product.product_name}/${product.product_id}`)}>{product.product_name}</h3>
                    <div className="price">
                        ${(+product.discount).toFixed(2)}
                    </div>
                    <button className='buttonCard' onClick={() => { setIsOpenCart(true), addProductCart(product) }}>
                        ADD TO CART
                    </button>
                </div>
            </div>
            <Cart isOpenCart={isOpenCart} closeModalCart={() => setIsOpenCart(false)} />
            <ProductDetails isOpen={isOpen} product={details} closeModal={() => setIsOpen(false)} />
        </>
    )
}

export default BoxProduct