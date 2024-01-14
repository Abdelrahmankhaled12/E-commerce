/* eslint-disable react/prop-types */
import './style.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { header_links } from '../../../constants'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ isOpenMenu, closeModalMenu }) => {

  const navigate = useNavigate()

  return (
    <div className={isOpenMenu ? "menu menu_active" : "menu"}>
      <div className="flex">
        <div className="content">
          <div className="top">
            <h2>Menu</h2>
            <button onClick={() => closeModalMenu()}><FontAwesomeIcon icon={faXmark} /></button>
          </div>
          <ul>
            {header_links.map(link => (
              <li
                className="menuItem"
                key={link.title}
                onClick={() => navigate(link.router)}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
        <div  style={{"flex":"1"}} onClick={() => closeModalMenu()}></div>
      </div>
    </div>
  )
}

export default SideBar