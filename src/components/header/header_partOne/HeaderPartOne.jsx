import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const HeaderPartOne = () => {

    return (
        <div>
            <div className="header_one">
                <div className='content_headerOne'>
                    <div className="div">
                        <p>Hello, Customer</p>
                    </div>
                    <div className="flex">
                        <p className='after'><FontAwesomeIcon icon={faLocationDot} style={{ "margin": "0px 10px" }} />Store Location</p>
                        <p><FontAwesomeIcon icon={faPenToSquare} style={{ "margin": "0px 10px" }} />Track Your Order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPartOne