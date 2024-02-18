import Reviews from './reviews/Reviews'
import Timer from './timer/Timer'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProductCart } from '../../../store/cartSlice'
import './style.scss'
import ColorsProduct from '../../../components/colors/ColorsProduct'
import Share from './share/Share'

const ProductDetailsAll = ({ product, setOpenCart }) => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch();

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


    const addProductCart = (productCart) => {
        productCart.counter = counter;
        dispatch(setProductCart(productCart))
        setCounter(1)
    }



    return (
        <div className="productDetails">
            <div className="category" onClick={() => navigate(`/Shop/${product.category_name}`)}>
                {product?.category_name}
            </div>
            <h2>{product?.product_name}</h2>
            <Reviews />
            <div className="price">
                ${(+product?.price - +product.discount).toFixed(2)}
                {
                    +product.discount > 0 && (
                        <del>{'$' + (product?.price).toFixed(2)}</del>
                    )
                }
            </div>
            <div className="avilability">
                <p> <strong>Availabilty : </strong> {product.stock <= product.sold ? "Out of Stock" : "In Stock "}</p>
            </div>
            <div className="description" dangerouslySetInnerHTML={{ __html: product.description }} />
            {product.colors.length > 0 && (
                <ColorsProduct colors={product.colors} />
            )}
            <Timer product={product} />
            {product.stock > product.sold && (
                <div className="flex">
                    <div className="counter">
                        <button onClick={() => changeCounter("minus")} style={counter === 1 ? { "cursor": "not-allowed" } : { "cursor": "pointer" }} ><FontAwesomeIcon icon={faMinus} /></button>
                        <p>{counter}</p>
                        <button onClick={() => changeCounter("plus")}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <button
                        className='addCard'
                        onClick={() => { setOpenCart(), addProductCart(product) }}
                    >
                        ADD TO CART
                    </button>
                </div>
            )}
            <div className="details">
                <p> <strong>Collections:</strong> {product.category_name} </p>
                <p> <strong>BarCode:</strong> {product.barcode} </p>
                <Share />
            </div>
        </div>
    )
}

export default ProductDetailsAll