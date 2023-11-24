import img from '../../../assets/50.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'

const BoxBest = () => {
    return (
        <div className="box_best">
            <div className="image">
                <img src={img} alt="" />
                <button className='search'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <div className="details">
                <div className="category">
                    Digital, Electronices
                </div>
                <h3>Home Security Camera</h3>
                <div className="price">
                    $290.66
                </div>
                <button className='buttonCard'>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default BoxBest