import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram ,faWhatsapp , faTwitter} from '@fortawesome/free-brands-svg-icons'
import "./style.scss"


const Share = () => {
  return (
    <div className='share'> 
        <strong>Share:</strong>
        <ul>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faWhatsapp} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
        </ul>
    </div>
  )
}

export default Share