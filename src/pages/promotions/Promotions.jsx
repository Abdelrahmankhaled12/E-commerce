import "./style.scss"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import Header from '../../components/header/Header'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from "react";
import { TimaAnimation } from "../../constants"
import { getTopDiscountObjects } from "../../utils/functions";
import Timer from "../details/productDetails/timer/Timer";
import { useNavigate } from 'react-router-dom'
import Animation from "../../components/animation/Animation"


const Promotions = ({ products }) => {

    const [animationOff, setAnimationOff] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        animationOFF()
    }, [])

    const animationOFF = () => {
        setTimeout(() => {
            setAnimationOff(false)
        }, TimaAnimation)
    }


    const calcDiscount = (discount, price) => {
        console.log((+discount / +price) * 100)
        return +((+discount / +price) * 100).toFixed(0)
    }

    let productsAfterFilter = getTopDiscountObjects(products);

    return (
        <>
            {
                animationOff ? (
                    <Animation />
                ) : (
                    <>
                        <Header />
                        <div className="promotions">
                            <ContentWrapper>
                                <BreadCrumb page={"Promotions"} />
                                <div className="boxesPromotions">
                                    {
                                        productsAfterFilter.map((product, index) => (
                                            <div className="boxPromotions" key={index}>
                                                <div className="image">
                                                    <img src={product.images[0]} alt="" />
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
                                                <div className="content_details">
                                                    <div className="category">
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
                                                        <p> <strong>Availabilty : </strong> {product.stock === product.sold ? "Out of Stock " : "In Stock"} </p>
                                                    </div>
                                                    <Timer product={product} />
                                                    <div className="flex">
                                                        <button className='addCard' onClick={() => navigate(`/Shop/${product.category_name}/${product.product_name}/${product.product_id}`)}>Details</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </ContentWrapper>
                        </div>
                        <Icons />
                        <ButtonScroll />
                        <Footer />
                    </>
                )
            }
        </>
    )
}

export default Promotions