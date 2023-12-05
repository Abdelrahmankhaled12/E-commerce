/* eslint-disable react/prop-types */
import './style.scss'
import { useNavigate } from 'react-router-dom'

const WarningLogin = ({ isOpen  }) => {
    const navigate = useNavigate();

    return (
        <div className='WarningLogin' style={isOpen ? {"opacity" : "1" , "zIndex" : "1000"} : {"opacity" : "0" , "zIndex" : "-1"}}>
            <div className="content">
                <p>In order to make a purchase, you must log in first. If you do not have an account, you can create a private account for yourself</p>
                <div className="buttons">
                    <button className='loginButton' onClick={()=> navigate("/login")}>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default WarningLogin