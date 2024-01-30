/* eslint-disable react/prop-types */
import './style.scss'
import { useNavigate } from "react-router-dom";

const BoxSearchProduct = ({ data ,  productName }) => {

    const product = data.filter(item => {
        if (item.product_name === productName) {
            return item
        }
    })

    const navigate = useNavigate();

    return (
        <div className="boxSearchProduct" onClick={()=> navigate(`/details/${product[0].category_name}/${product[0].product_name}/${product[0].product_id}`)}>
            <div className="image">
                <img src={product[0].images[0]} alt="image product" />
            </div>
            <div className="text">
                <h4>{product[0].product_name}</h4>
                <p>${product[0].discount}</p>
            </div>
        </div>
    )
}

export default BoxSearchProduct