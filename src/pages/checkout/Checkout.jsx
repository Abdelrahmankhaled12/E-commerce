import './style.scss'
import logo from "../../assets/logo.avif"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { governorate } from '../../constants'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { makeOrder } from '../../utils/api';
import WarningLogin from '../../components/warning/WarningLogin';
import useFetch from '../../hooks/useFetch';
const Checkout = () => {


    let { products } = useSelector((state) => state.cart);
    let { logged, userData } = useSelector((state) => state.login);
    const { data, } = useFetch("admin/all_offers");
    const [ loop , setLoop] = useState(true)
    const [totalPrice, setTotalPrice] = useState(products?.map(item => +item.discount * +item.counter)?.reduce((acc, ele) => acc + ele, 0))
    const [discount, setDiscount] = useState(totalPrice > 1000 ? 3 : 0);
    const [ notFount , setNotFount] = useState(false);
    const [ promoCode , setPromoCode ] = useState("");
    const [pay , setPay ] = useState("");
    const [visaDiscount , setVisaDiscount ] = useState(0);

    const filterPromoCode = (promo) => {
        let value = data.data.filter(item => item.promocode === promo);
        if(value.length === 0) {
            setNotFount(true)
            setPromoCode("")
        }else {
            setNotFount(false)
            if(loop) {
                setDiscount(discount + +value[0].discount)
                setLoop(false)
            }
        }
    }


    useEffect(() => {
        setTotalPrice(products?.map(item => +item.discount * +item.counter)?.reduce((acc, ele) => acc + ele, 0));
        
    if(pay === "visa" && totalPrice < 1000) {
        setVisaDiscount(30)
    }else {
        setVisaDiscount(0)
    }

    }, [products , totalPrice , pay])

    const handleClick = () => {
        let data = {
            token: userData.token,
            order_details: JSON.stringify(products.map(element => "Product Name" + element.product_name + ",Price" + element.discount + ",Counter" + element.counter)),
            products: productss,
            total_price: totalPrice - (totalPrice * (discount / 100)),
            paid_method: "cash",
            promocode: promoCode
        };
        makeOrder(data);
    }

    let productss = [];

    products.forEach(element => {
        var product = new Product(element.productId, element.quantity);
        productss.push(product);
    });


    function Product(id, mount) {
        this.product_id = id;
        this.amount = mount;
    }


    return (
        <>
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
                                </div>
                                <input type="text" placeholder='Email or mobile Phone number' value={userData.email || ""} />
                                <div className="delivery">
                                    <h3>Delivery</h3>
                                    <form action="">
                                        <div className="flex">
                                            <input type="text" placeholder='First name' value={userData.name?.split(" ")[0] || ""} />
                                            <input type="text" placeholder='Last name' value={userData.name?.split(" ")[1] || ""} />
                                        </div>
                                        <input type="text" placeholder='Address' value={userData.address || ""} />
                                        <div className="flex">
                                            <input type="text" placeholder='Phone' value={userData.phone || ""} />
                                        </div>
                                        <select>
                                            <option value="">Governorate</option>
                                            {governorate.map(item => (
                                                <option value={item} key={item}>{item}</option>
                                            ))}
                                        </select>
                                        <select onChange={(e)=> setPay(e.target.value)}>
                                            <option value="">Pay Medthos</option>
                                                <option value={'cash'}>Cash</option>
                                                <option value={'visa'}>Visa</option>
                                        </select>
                                    </form>
                                    <button className='pay' onClick={() => handleClick()}>Pay</button>
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
                                    
                                <div className="promoCodeUser">
                                        <input type="text" placeholder='Promo Code' onChange={(e)=> setPromoCode(e.target.value)}/>
                                        <button className='apply' onClick={()=>filterPromoCode(promoCode)}>Apply</button>
                                        <p style={notFount ? {"display" : "block"} : {"display" : "none"}} className='notFount'>NOT FOUNT</p>
                                    </div>
                                    <div className="flex">
                                        <h4>Subtotal</h4>
                                        <p>${totalPrice.toFixed(2)}</p>
                                    </div>
                                    <div className="flex">
                                        <h4>Discount</h4>
                                        <p>${((totalPrice * (discount / 100)) + visaDiscount).toFixed(2)}</p>
                                    </div>
                                    <div className="flex">
                                        <h4>Total</h4>
                                        <p>${(totalPrice - (totalPrice * ( discount / 100)) - visaDiscount).toFixed(2)}</p>
                                    </div>
                                </div>
                            </ContentWrapper>
                        </div>
                    </div>
                </div>
            </div>
            <WarningLogin isOpen={!logged} />
        </>

    )
}

export default Checkout