import './style.scss'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";

const HeaderPartOne = () => {

    const navigate = useNavigate();

    let { logged, userData } = useSelector((state) => state.login);

    return (
        <div>
            <div className="header_one">
                <div className='content_headerOne'>
                    <div className="div">
                        {logged ? (
                            <p>Hello, {userData.name}</p>
                        ) : (
                            <p>Hello, Customer - <span onClick={() => navigate("/login")}> Sign in</span> or<span onClick={() => navigate("/register")}> Register</span></p>
                        )}
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