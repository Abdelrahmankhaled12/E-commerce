import './style.scss'
import logo from '../../../assets/logo.avif'
import { sidebar_links } from '../../../constants'
import { useState } from 'react'

const SideBar = () => {

    const [active , setActive] = useState("");

    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                {sidebar_links.map(link => (
                    <li 
                    key={link.title} 
                    className={active === link.title ? "active" : ""}
                    onClick={()=> setActive(link.title)}
                    >{link.title}</li>
                ))}
            </ul>
            <p>E-commerce</p>
        </div>
    )
}

export default SideBar