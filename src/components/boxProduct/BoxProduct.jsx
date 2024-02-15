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

const BoxProduct = ({ product, style, widthImage }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [details, setDetails] = useState({});

    const [isOpenCart, setIsOpenCart] = useState(false);
    const dispatch = useDispatch();

    const addProductCart = (productCart) => {
        if (product.counter === 1) {
            dispatch(setProductCart(productCart))
        } else {
            productCart.counter = 1;
            dispatch(setProductCart(productCart))
        }
    }

    const calcDiscount = (discount, price) => {
        console.log((+discount / +price) * 100)
        return +((+discount / +price) * 100).toFixed(0)
    }

    const navigate = useNavigate();


    return (
        <>
            <div className={`box_product ${style}`}>
                <div className="image" style={{ "width": (widthImage + 45) + "px", "height": (widthImage + 45) + "px" }}>
                    <img src={product.images[0]} alt="" style={{ "width": widthImage + "px", "height": widthImage + "px" }} />
                    <button className='search' onClick={() => { setDetails(product), setIsOpen(true) }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    {product.stock > product.sold &&
                        calcDiscount(product.discount, product.price) > 0 && (
                            <div className="discount">
                                {calcDiscount(product.discount, product.price)}%
                            </div>
                        )
                    }
                    {product.stock <= product.sold &&
                        (
                            <div className="OutOfStock">
                                Out of stock
                            </div>
                        )
                    }
                </div>
                <div className="details">
                    <div className="category">
                        {product.category_name}
                    </div>
                    <h3 onClick={() => navigate(`/Shop/${product.category_name}/${product.product_name}/${product.product_id}`)}>{product.product_name}</h3>
                    <div className="price">
                        ${(+product?.price - +product.discount).toFixed(2)}
                        {
                            +product.discount > 0 && (
                                <del>{'$' + (product?.price).toFixed(2)}</del>
                            )
                        }
                    </div>
                    {product.stock > 0 && (
                        <button className='buttonCard' onClick={() => { setIsOpenCart(true), addProductCart(product) }}>
                            ADD TO CART
                        </button>
                    )}
                </div>
            </div>
            <Cart isOpenCart={isOpenCart} closeModalCart={() => setIsOpenCart(false)} />
            <ProductDetails isOpen={isOpen} product={details} closeModal={() => setIsOpen(false)} />
        </>
    )
}

export default BoxProduct