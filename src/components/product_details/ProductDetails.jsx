/* eslint-disable react/prop-types */

import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProductCart } from '../../store/cartSlice'
import Cart from '../cart/Cart'
import ImagesProduct from './images/ImagesProduct'
import ColorsProduct from '../colors/ColorsProduct'

const ProductDetails = ({ isOpen, closeModal, product }) => {

    const [counter, setCounter] = useState(1)

    const changeCounter = (action) => {
        if (action === "minus") {
            if (counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }
        }

        if (action === "plus") {
            setCounter(counter + 1)
        }
    }

    const [isOpenCart, setIsOpenCart] = useState(false);
    const dispatch = useDispatch();

    const addProductCart = (product) => {
        product.counter = counter;
        dispatch(setProductCart(product))
    }

    return (
        <>
            <div className={isOpen ? "product_details active_details" : 'product_details'}>
                <div className="box_details">
                    <div className="close">
                        <button onClick={() => { closeModal(), setCounter(1) }}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    <div className="content">
                        <div className="images">
                            <ImagesProduct images={product.images} />
                        </div>
                        <div className="content_details">
                            <div className="category" onClick={() => navigate(`/Shop/${product.category_name}`)}>
                                {product?.category_name}
                            </div>
                            <h2>{product?.product_name}</h2>
                            <div className="price">
                                ${(+product?.price - +product.discount).toFixed(2)}
                                {
                                    +product.discount > 0 && (
                                        <del>{'$' + (product?.price).toFixed(2)}</del>
                                    )
                                }
                            </div>
                            <div className="avilability">
                                <p> <strong>Availabilty : </strong> In Stock </p>
                            </div>
                            <div className="description" dangerouslySetInnerHTML={{ __html: product.description }} />
                            {product?.colors?.length > 0 && (
                                <ColorsProduct colors={product.colors} />
                            )}
                            <div className="flex">
                                <div className="counter">
                                    <button onClick={() => changeCounter("minus")} style={counter === 1 ? { "cursor": "not-allowed" } : { "cursor": "pointer" }} ><FontAwesomeIcon icon={faMinus} /></button>
                                    <p>{counter}</p>
                                    <button onClick={() => changeCounter("plus")}><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                                <button className='addCard' onClick={() => { setIsOpenCart(true), addProductCart(product) }}>ADD TO CARD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cart isOpenCart={isOpenCart} closeModalCart={() => setIsOpenCart(false)} />

        </>
    )
}

export default ProductDetails