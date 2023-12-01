import './style.scss'
import logo from "../../assets/logo.avif"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { governorate } from '../../constants'
import { useSelector } from "react-redux";
import { useEffect , useState} from 'react';
import { makeOrder } from '../../utils/api';

const Checkout = () => {

    let { products } = useSelector((state) => state.cart);
    let { userData } = useSelector((state) => state.login);


    const [totalPrice, setTotalPrice] = useState(products?.map(item => +item.discount * +item.counter)?.reduce((acc, ele) => acc + ele, 0))

    useEffect(() => {
        setTotalPrice(products?.map(item => +item.discount * +item.counter)?.reduce((acc, ele) => acc + ele, 0));

      }, [products])
    console.log(products)

    const handleClick = () => {
        let data = {
            token: userData.token,
            order_details: JSON.stringify(products),
            products: [],
            total_price: totalPrice,
            paid_method: "cash"
        };
        console.log(data.token)
        makeOrder(data);
    }



    return (
        <div className='checkout'>
            <div className="header">
                <ContentWrapper>
                    <div className='image'>
                        <img src={logo} alt="Logo" />
                    </div>
                </ContentWrapper>
            </div>
            <div className="body">
                <div className="div">
                    <div className="contact">
                        <ContentWrapper>
                            <div className="text">
                                <h3>Contact</h3>
                                <p>Have an account?<span> Log in</span></p>
                            </div>
                            <input type="text" placeholder='Email or mobile Phone number' />
                            <div className="delivery">
                                <h3>Delivery</h3>
                                <form action="">
                                    <div className="flex">
                                        <input type="text" placeholder='First name' />
                                        <input type="text" placeholder='Last name' />
                                    </div>
                                    <input type="text" placeholder='Address' />
                                    <div className="flex">
                                        <input type="text" placeholder='City' />
                                        <input type="text" placeholder='Postal Code' />
                                    </div>
                                    <select>
                                        <option value="">Governorate</option>
                                        {governorate.map(item => (
                                            <option value={item} key={item}>{item}</option>
                                        ))}
                                    </select>
                                </form>
                                <button className='pay' onClick={()=>handleClick()}>Pay</button>
                            </div>
                        </ContentWrapper>
                    </div>
                    <div className="products">
                        <ContentWrapper>
                            <div className="products_boxes">
                                {products.map(product => (
                                    <div className="box" key={product.product_id}>
                                        <div className="box_product">
                                            <div className="image_box">
                                                <img src={product.image[0]} alt="" />
                                                <span><p>{product.counter}</p></span>
                                            </div>
                                            <h5>{product.product_name}</h5>
                                        </div>
                                        <div className="box_price">
                                            ${(+product.discount * product.counter).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="price_all">
                                <div className="flex">
                                    <h4>Subtotal</h4>
                                    <p>${totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="flex">
                                    <h4>Discount</h4>
                                    <p>$0.00</p>
                                </div>
                                <div className="flex">
                                    <h4>Total</h4>
                                    <p>${totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                        </ContentWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout