/* eslint-disable react/prop-types */
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import ProductDetails from '../../components/product_details/ProductDetails'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { setProductCart } from '../../store/cartSlice'
import Cart from '../../components/cart/Cart'
import { useParams } from 'react-router-dom'
import BoxProduct from '../../components/boxProduct/BoxProduct'

const Details = ({ data_products }) => {

    let { category, product, id } = useParams();

    product = data_products.filter((item) => item.product_id === +id)[0]

    const [isOpen, setIsOpen] = useState(false);
    const [details, setDetails] = useState({});

    let products = data_products.filter(item => item.category_name === category)

    products = products?.filter((item, index) => {
        if (index <= 3) {
            return item
        }
    })


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

    const dispatch = useDispatch();

    const [isOpenCart, setIsOpenCart] = useState(false);

    const addProductCart = (product) => {
        product.counter = counter;
        dispatch(setProductCart(product))
        setCounter(1)
    }


    return (
        <>
            <div className="details">
                <ContentWrapper>
                    <div className="items">
                        <ul>
                            <li>Home <FontAwesomeIcon icon={faChevronRight} /></li>
                            <li>{product?.category_name} <FontAwesomeIcon icon={faChevronRight} /></li>
                            <li>{product?.product_name}</li>
                        </ul>
                    </div>
                    <div className="product_detailsFull">
                        <div className="image">
                            <img src={product?.images[0]} alt="" />
                        </div>
                        <div className="content">
                            <div className="category">
                                {product?.category_name}
                            </div>
                            <h2>{product?.product_name}</h2>
                            <div className="price">
                                ${(+product?.discount).toFixed(2)}
                            </div>
                            <div className="avilability">
                                <p> <strong>Availabilty : </strong> In Stock </p>
                            </div>
                            <div className="description">
                                {product?.description}
                            </div>
                            <div className="counter">
                                <button onClick={() => changeCounter("minus")} style={counter === 1 ? { "cursor": "not-allowed" } : { "cursor": "pointer" }} ><FontAwesomeIcon icon={faMinus} /></button>
                                <p>{counter}</p>
                                <button onClick={() => changeCounter("plus")}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <button className='addCard' onClick={() => { setIsOpenCart(true), addProductCart(product) }}>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                    <div className='bestseller'>
                        <div className="top">
                            <h3>Maybe You Like</h3>
                        </div>
                        <div className="boxes_products">
                            {
                                products?.map((product, index) => (
                                    <BoxProduct
                                        product={product}
                                        setDetailsProduct={() => setDetails(product)}
                                        openModel={() => setIsOpen(true)}
                                        widthImage={250}
                                        style={"column"}
                                        key={index} />
                                ))
                            }
                        </div>
                        <ProductDetails isOpen={isOpen} product={details} closeModal={() => setIsOpen(false)} />
                    </div>
                </ContentWrapper>
            </div>
            <Cart isOpenCart={isOpenCart} closeModalCart={() => setIsOpenCart(false)} />
        </>
    )
}

export default Details