import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
const ButtonScroll = () => {

    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY])

    const controlNavbar = () => {
        if (window.scrollY > 280) {
            setShow(true)
        } else {
            setShow(false)
        }
        setLastScrollY(window.scrollY)
    }

    const handleButtonClick = () => {
        const section = document.getElementById("top");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <button
            className='scroll_button'
            onClick={() => handleButtonClick()}
            style={show ? { 'opacity': "1" } : { "opacity": "0" }}
        >
            <FontAwesomeIcon icon={faAnglesUp} />
        </button>
    )
}

export default ButtonScroll