/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Cart from '../../../components/cart/Cart'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProductCart } from '../../../store/cartSlice'
import { useNavigate } from 'react-router-dom'
const BoxBest = ({ product, openModel, setDetailsProduct }) => {

    const dispatch = useDispatch();

    const [isOpenCart, setIsOpenCart] = useState(false);

    const addProductCart = (product) => {
        let productCart = product;
        productCart.counter = 1;
        dispatch(setProductCart(productCart))
    }

    const navigate = useNavigate();

    return (

        <>
            <div className="box_best" >
                <div className="image">
                    <img src={product.image[0]} alt="" />
                    <button className='search' onClick={() => { openModel(), setDetailsProduct() }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div className="details">
                    <div className="category">
                        {product.category_name}
                    </div>
                    <h3 onClick={()=>navigate(`/details/${product.category_name}/${product.product_name}/${product.product_id}`)}>{product.product_name}</h3>
                    <div className="price">
                        ${(+product.discount).toFixed(2)}
                    </div>
                    <button className='buttonCard' onClick={() => { setIsOpenCart(true), addProductCart(product) }}>
                        ADD TO CART
                    </button>
                </div>
            </div>
            <Cart isOpenCart={isOpenCart} closeModalCart={() => setIsOpenCart(false)} />
        </>

    )
}

export default BoxBest