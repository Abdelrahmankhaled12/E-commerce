import './header.scss'
import logo from '../../assets/logo.avif'
import SearchBar from '../searchBar/SearchBar'
import AddCard from '../addCard/AddCard'
import { useNavigate } from "react-router-dom";
import { header_links } from '../../constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const navigate = useNavigate();

    return (
        <header>
            <div className="header_one">
                <div className='content_headerOne'>
                    <p className='after'><FontAwesomeIcon icon={faLocationDot} style={{"margin":"0px 10px"}} />Store Location</p>
                    <p><FontAwesomeIcon icon={faPenToSquare} style={{"margin":"0px 10px"}}/>Track Your Order</p>
                </div>
            </div>
            <div className="header_two">
                <div className='content_headerTwo'>
                    <img src={logo} />
                    <SearchBar />
                    <AddCard />
                </div>
            </div>
            <div className="header_three">
                <div className='content_headerThree'>
                    <ul className="menuItems">
                        {header_links.map(link => (
                            <li className="menuItem" key={link.title} onClick={() => navigate(link.router)} >{link.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header