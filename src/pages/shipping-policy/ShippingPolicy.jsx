import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import './style.scss'


const ShippingPolicy = () => {
    return (
        <>
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
        </>
    )
}

export default ShippingPolicy