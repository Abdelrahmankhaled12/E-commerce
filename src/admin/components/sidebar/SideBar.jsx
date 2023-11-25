import './style.scss'
import logo from '../../../assets/logo.avif'
import { sidebar_links } from '../../../constants'
import { useNavigate, useLocation } from 'react-router-dom'

const SideBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    console.log(path)
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                {sidebar_links.map(link => (
                    <li
                        key={link.title}
                        className={path === link.router.split("/")[2] ? "active" : ""}
                        onClick={() => navigate(link.router)}
                    >{link.title}</li>
                ))}
            </ul>
            <p>E-commerce</p>
        </div>
    )
}

export default SideBar