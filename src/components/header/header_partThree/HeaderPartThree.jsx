import './style.scss'
import { useNavigate } from "react-router-dom";
import { header_links } from '../../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HeaderPartThree = ({ data }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState(location.pathname === "/" ? true : false)

    data = data.filter((category, index) => index < 9);
    useEffect(() => {
        const handleResize = () => {
            // Set your threshold value
            const screenWidthThreshold = 1192; // You can adjust this value based on your requirement
            // Check if the screen width is greater than the threshold
            const isGreaterThanThreshold = window.innerWidth > screenWidthThreshold;
            // Update the state
            setActive(isGreaterThanThreshold && (location.pathname === "/"));
        };
        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);
        // Initial check on component mount
        handleResize();
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
        <div className="header_three">
            <div className='content_headerThree'>
                <ul className="menuItems">
                    <div className='shop' onClick={() => setActive(!active)}>
                        <div className="button_shop">
                            <p>SHOP BY DEPARTMENT</p>
                            {active ? (
                                <FontAwesomeIcon icon={faXmark} />
                            ) : (
                                <FontAwesomeIcon icon={faBarsStaggered} />
                            )}
                        </div>
                        <ul
                            style={active ? { "opacity": "1", "zIndex": "10000" } : { "opacity": "0", "zIndex": "-1" }}
                        >
                            {data.map((category) => (
                                <li onClick={() => navigate(`/Shop/${category.category_name}`)} key={category.category_name}>{category.category_name}</li>
                            ))}
                            <li onClick={() => navigate(`/Shop/categories`)} key={"categories"}>All Categories</li>
                        </ul>
                    </div>
                    {header_links.map(link => (
                        <li
                            className="menuItem"
                            key={link.title} onClick={() => navigate(link.router)}
                        >
                            {link.title}
                            {link.title === "SHOP" && (
                                <p className='iconNew'>New</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HeaderPartThree