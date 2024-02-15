/* eslint-disable react/prop-types */
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import './style.scss'
import { useState , useEffect } from 'react'
import ProductDetailsAll from './productDetails/ProductDetailsAll'
import Cart from '../../components/cart/Cart'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import Footer from '../../components/footer/Footer'
import BreadCrumbDetails from './breadcrumb/BreadCrumbDetails'
import MaybeYouLike from './maybeYouLike/MaybeYouLike'
import ImagesProductDetails from './productDetails/images/ImagesProductDetails'
import Animation from "../../components/animation/Animation"
import { TimaAnimation } from "../../constants"

const Details = ({ data_products }) => {

    let { category, product, id } = useParams();

    product = data_products.filter((item) => item.product_id === +id)[0]

    const [isOpenCart, setIsOpenCart] = useState(false);

    const [animationOff, setAnimationOff] = useState(true);

    useEffect(() => {
        animationOFF()
    }, [product])

    const animationOFF = () => {
        setAnimationOff(true)
        setTimeout(() => {
            setAnimationOff(false)
        }, TimaAnimation)
    }


    return (
        <>
            {
                animationOff ? (
                    <Animation />
                ) : (
                    <>
                        <Header />
                        <div className="details">
                            <ContentWrapper>
                                <BreadCrumbDetails category={product.category_name} product={product.product_name} />
                                <div className="product_detailsFull">
                                    <ImagesProductDetails images={product.images} />
                                    <ProductDetailsAll product={product} setOpenCart={() => setIsOpenCart(true)} />
                                </div>
                                <MaybeYouLike productID={product.product_id} data={data_products} />
                            </ContentWrapper>
                        </div>
                        <Icons />
                        <ButtonScroll />
                        <Footer />
                        <Cart isOpenCart={isOpenCart} closeModalCart={() => setIsOpenCart(false)} />
                    </>
                )
            }
        </>

    )
}

export default Details