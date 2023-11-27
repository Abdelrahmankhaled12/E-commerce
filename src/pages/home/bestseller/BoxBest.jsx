/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'

const BoxBest = ({ product , openModel, setDetailsProduct }) => {
    return (
        <div className="box_best">
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
                    ${product.discount}
                </div>
                <button className='buttonCard'>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default BoxBest