import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import './style.scss'
import Header from '../../components/header/Header'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import Footer from '../../components/footer/Footer'
import { useEffect, useState } from "react"
import Animation from "../../components/animation/Animation"
import { TimaAnimation } from "../../constants"

const ShippingPolicy = () => {

    const [animationOff, setAnimationOff] = useState(true);

    useEffect(() => {
        animationOFF()
    }, [])

    const animationOFF = () => {
        setTimeout(() => {
            setAnimationOff(false)
        }, TimaAnimation)
    }

    return (
        <>
            {
                animationOff ?
                    (
                        <Animation />
                    ) : (
                        <>
                            <Header />
                            <div className="shipping_policy">
                                <ContentWrapper>
                                    <BreadCrumb page={"Shipping policy"} />
                                    <div className="content">
                                        <h4>Shipping policy</h4>
                                        <p>With free shipping, your order will be delivered 5-8 days after all your items are available to ship, including pre-order items.</p>
                                        <p>To place an order online, do the following:</p>
                                        <ul>
                                            <li>Add at least $25 of eligible items to your Shopping Cart. Items with "FREE Shipping" messaging on the product detail page contribute to</li>
                                            <li>Proceed to checkout.</li>
                                            <li>Select FREE Shipping as your shipping speed.</li>
                                        </ul>
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

export default ShippingPolicy