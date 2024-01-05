/* eslint-disable react/prop-types */
import SideBar from '../sidebar/SideBar'
import HeaderDash from '../header/HeaderDash'
import FooterDash from '../footer/FooterDash'

const BodyContent = ({ children }) => {
    return (
        <div className='body'>
            <div className="flex">
                <SideBar />
                <div className="bodyContent">
                    <HeaderDash />
                    {children}
                    <FooterDash />
                </div>
            </div>
        </div>
    )
}

export default BodyContent