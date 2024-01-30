import logo from "../../../assets/logo.avif"
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const HeaderCheck = () => {

    const navigate = useNavigate()


    return (
        <div className="headerCheck">
            <ContentWrapper>
                <div className='image' onClick={() => navigate("/")}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="icon" onClick={() => navigate("/")}>
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
            </ContentWrapper>
        </div>
    )
}

export default HeaderCheck