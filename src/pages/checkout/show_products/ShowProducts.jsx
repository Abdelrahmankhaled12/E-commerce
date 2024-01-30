import { useSelector } from "react-redux";
import "./style.scss"

const ShowProducts = () => {

    let { products } = useSelector((state) => state.cart);


    return (
        <div className="productsCheckOut">
            {products.map(product => (
                <div className="cardProduct" key={product.product_id}>
                    <div className="box">
                        <div className="image_box">
                            <img src={product.images[0]} alt="" />
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
    )
}

export default ShowProducts