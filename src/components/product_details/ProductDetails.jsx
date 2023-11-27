/* eslint-disable react/prop-types */

import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

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

    return (
        <>
            <div className={isOpen ? "product_details active_details" : 'product_details'}>
                <div className="box_details">
                    <div className="close">
                        <button onClick={() => { closeModal(), setCounter(1) }}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    <div className="content">
                        <div className="images">
                            <img src={typeof product.discount !== 'undefined' && product.image[0]} alt="" />
                        </div>
                        <div className="content_details">
                            <div className="category">
                                {product.category_name}
                            </div>
                            <h3>{product.product_name}</h3>
                            <div className="price">
                                ${typeof product.discount !== 'undefined' && !isNaN(product.discount) && product.discount}
                            </div>
                            <div className="availability">
                                <p> <strong>Availability: </strong> {product.stock === 0 ? "Unavailable" : "available"}</p>
                            </div>
                            <div className="description">
                                {product.description}
                            </div>
                            <div className="counter">
                                <button onClick={() => changeCounter("minus")} style={counter === 1 ? { "cursor": "not-allowed" } : { "cursor": "pointer" }} ><FontAwesomeIcon icon={faMinus} /></button>
                                <p>{counter}</p>
                                <button onClick={() => changeCounter("plus")}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <button className='addCard'>ADD TO CARD</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails