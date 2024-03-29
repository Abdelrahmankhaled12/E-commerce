/* eslint-disable react-hooks/rules-of-hooks */
import '../style.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const ContainerProducts = ({ title, products }) => {

    const [activeLeft, setActiveLeft] = useState(false);
    const [activeRight, setActiveRight] = useState(true);



    const navigate = useNavigate();


    return (
        <>
            <div className="div">
                <div className="topTitle">
                    <h3>{title}</h3>
                    <div className="buttons">
                        <button className='arrow' style={{ "cursor": activeLeft ? "pointer" : "not-allowed" }} onClick={() => { setActiveLeft(false), setActiveRight(true) }}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button className='arrow' style={{ "cursor": activeRight ? "pointer" : "not-allowed" }} onClick={() => { setActiveLeft(true), setActiveRight(false) }}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>
                </div>
                <div className="boxes" >
                    <div className="box-1" style={{ "transform": activeRight ? 'translateX(0%)' : 'translateX(-220%)' }}>
                        {
                            products?.map(product => (
                                <div className="box" key={product.product_name}>
                                    <div className="image">
                                        <img src={product.images[0]} alt="" style={{ "width": "100" + "px" }} />
                                    </div>
                                    <div className="details">
                                        <div className="category">
                                            {product.category_name}
                                        </div>
                                        <h3 onClick={() => navigate(`/shop/${product.category_name}/${product.product_name}/${product.product_id}`)}>{product.product_name}</h3>
                                        <div className="price">
                                            ${(+product?.price - +product.discount).toFixed(2)}
                                            {
                                                +product.discount > 0 && (
                                                    <del>{'$' + (product?.price).toFixed(2)}</del>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="box-2" style={{ "transform": activeLeft ? 'translateX(0%)' : 'translateX(220%)' }}>
                        {
                            products?.map(product => (
                                <div className="box" key={product.product_name}>
                                    <div className="image">
                                        <img src={product.images[0]} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="category">
                                            {product.category_name}
                                        </div>
                                        <h3 onClick={() => navigate(`/shop/${product.category_name}/${product.product_name}/${product.product_id}`)}>{product.product_name}</h3>
                                        <div className="price">
                                            ${(+product?.price - +product.discount).toFixed(2)}
                                            {
                                                +product.discount > 0 && (
                                                    <del>{'$' + (product?.price).toFixed(2)}</del>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContainerProducts