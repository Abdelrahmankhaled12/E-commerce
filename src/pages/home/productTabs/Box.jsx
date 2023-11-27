/* eslint-disable react/prop-types */
import './productTabs.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
const Box = ({ product, openModel, setDetailsProduct }) => {
    return (
        <div className="box">
            <div className="image">
                <img src={product.image[0]} alt="" />
                <button className='search' onClick={() => { openModel(), setDetailsProduct() }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <div className="details">
                <div className="category">
                    {product.category_name}
                </div>
                <h3>{product.product_name}</h3>
                <div className="price">
                    ${typeof product.discount !== 'undefined' && !isNaN(product.discount) ? product.discount : ""}
                </div>
                <button className='buttonCard'>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default Box