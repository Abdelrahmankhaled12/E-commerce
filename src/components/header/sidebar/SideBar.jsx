/* eslint-disable react/prop-types */
import './style.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBar = ({ isOpenMenu, closeModalMenu }) => {


  return (
    <div className={isOpenMenu ? "menu menu_active" : "menu"}>
      <div className="flex">
        <div className="content">
          <div>
            <div className="top">
              <h2>Your cart</h2>
              <button onClick={() => closeModalMenu()}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
          </div>
        </div>
        <div style={{ "flex": "1" }} onClick={() => closeModalMenu()}></div>
      </div>
    </div>
  )
}

export default SideBar