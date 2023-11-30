import './style.scss'
import { faFacebookF, faTwitter, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = () => {
    return (
        <div className='icons_social'>
            <div className="icon" style={{"backgroundColor":"#3b5998"}}>
                <FontAwesomeIcon icon={faFacebookF} />
                <p>Facebook</p>
            </div>
            <div className="icon" style={{"backgroundColor":"#62bdb2"}}>
                <FontAwesomeIcon icon={faTwitter} />
                <p>Twitter</p>
            </div>
            <div className="icon" style={{"backgroundColor":"#bd081c"}}>
                <FontAwesomeIcon icon={faPinterestP} />
                <p>Pinterest</p>
            </div>
            <div className="icon" style={{"backgroundColor":"#3f729b"}}>
                <FontAwesomeIcon icon={faInstagram} />
                <p>Instagram</p>
            </div>
            <div className="icon" style={{"backgroundColor":"#000"}}>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                <p>Mail To Us</p>
            </div>
        </div>
    )
}

export default Icons