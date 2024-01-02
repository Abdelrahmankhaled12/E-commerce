import './style.scss'
import { useNavigate } from "react-router-dom";
import { header_links } from '../../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import { useLocation } from 'react-router-dom';


const HeaderPartThree = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { data, } = useFetch("admin/all_categories");
    const [active, setActive] = useState(location.pathname === "/" ? true : false)

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
                            {data?.data.map((category) => (
                                <li onClick={() => navigate(`/Shop/${category.category_name}`)} key={category.category_name}>{category.category_name}</li>
                            ))}
                        </ul>
                    </div>
                    {header_links.map(link => (
                        <li
                            className="menuItem"
                            key={link.title} onClick={() => navigate(link.router)}
                        >{link.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HeaderPartThree