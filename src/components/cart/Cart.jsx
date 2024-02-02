/* eslint-disable react/prop-types */
import './style.scss'
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setProductCartFilter, setCounter } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = ({ isOpenCart, closeModalCart }) => {

  let { products } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [totalPrice, setTotalPrice] = useState(products?.map(item => +item.discount * +item.counter)?.reduce((acc, ele) => acc + ele, 0))

  useEffect(() => {
    setTotalPrice(products?.map(item => +item.discount * +item.counter)?.reduce((acc, ele) => acc + ele, 0));
  }, [products])

  const removeProduct = (product_id) => {
    let productsNew = products.filter(product => product.product_id !== product_id);
    dispatch(setProductCartFilter(productsNew))
  }

  return (
    <div className={isOpenCart ? "cart cart_active" : "cart"}>
      <div className="flex">
        <div style={{ "flex": "1" }} onClick={() => closeModalCart()}></div>
        <div className="content">
          <div>
            <div className="top">
              <h2>Your cart</h2>
              <button onClick={() => closeModalCart()}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            <div className="boxes" style={{ "overflowY": "auto", "height": "70vh" }}>
              {products.length === 0 ? (
                <p className='cartEmpty'>Your cart is empty</p>
              ) :
                products?.map((product, index) =>
                (
                  <>
                    <div className="box" key={product.product_id} id={index + 20}>
                      <div className='flex'>
                        <img src={product.images[0]} alt="" />
                        <div className="text">
                          <h4>{product.product_name}</h4>
                          <div className="price">
                            ${(+product.discount).toFixed(2)}
                          </div>
                          <div className="counter">
                            <button onClick={() => {
                              dispatch(setCounter([1, product.product_id]))
                            }} style={product.counter === 1 ? { "cursor": "not-allowed", "pointerEvents": "none" } : { "cursor": "pointer" }} ><FontAwesomeIcon icon={faMinus} /></button>
                            <p>{+product.counter}</p>
                            <button onClick={() => {
                              dispatch(setCounter([-1, product.product_id]))
                            }}><FontAwesomeIcon icon={faPlus} /></button>
                          </div>
                        </div>
                      </div>
                      <button className='remove' onClick={() => {
                        removeProduct(product.product_id)
                      }}><FontAwesomeIcon icon={faXmark} onClick={() => {
                        removeProduct(product.product_id)
                      }} /></button>
                    </div>
                  </>
                ))
              }
            </div>
          </div>
          {products.length > 0 &&
            (
              <div className="footer_cart">
                <div className="flex">
                  <p>Subtotal</p>
                  <div className="price">
                    ${totalPrice.toFixed(2)}
                  </div>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <div className="buttons">
                  {/* <button>VIEW CART</button> */}
                  <button className='check' style={{width:"100%"}} onClick={() => navigate("/")}>check out</button>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Cart