import './style.scss'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { useSelector } from "react-redux";
import { useState } from 'react';
import ShowProducts from './show_products/ShowProducts';
import Price from './price/Price';
import HeaderCheck from './header/HeaderCheck';
import FormCheckOut from './form/FormCheckOut';

const Checkout = () => {


    let { products } = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(products?.map(item => +item.discount * +item.counter)?.reduce((acc, ele) => acc + ele, 0))

    return (
        <>
            <div className='checkout'>
                <HeaderCheck />
                <div className="body">
                    <ContentWrapper>
                        <FormCheckOut />
                        <div className="products">
                            <ShowProducts />
                            <Price totalPrice={totalPrice} />
                        </div>
                    </ContentWrapper>
                </div>
                
            </div>
        </>
    )
}

export default Checkout