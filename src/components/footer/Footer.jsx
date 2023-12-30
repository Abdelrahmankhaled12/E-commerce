import ContentWrapper from '../contentWrapper/ContentWrapper'
import './footer.scss'
import logo from "../../assets/logo.avif"
import { footer_links } from '../../constants'
import SubScribers from '../subscribers/SubScribers'
import icon from '../../assets/icon_footer.avif'
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <>
            <footer>
                <SubScribers />
                <ContentWrapper>
                    <div className="grid">
                        <div className="info">
                            <img src={logo} alt="Logo" />
                            <p><strong>Complex </strong>is a premium Shopify theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.</p>
                            <div className="location">
                                <p><strong>Add: </strong>Walls Street 68, Mahattan, New York, USA.</p>
                            </div>
                            <div className="email">
                                <p><strong>Email: </strong>support@gmail.com.</p>
                            </div>
                            <div className="fax">
                                <p><strong>Fax: </strong>(+100) 123 456 7890 - (+100) 123 456 7891.</p>
                            </div>
                        </div>
                        {footer_links.map((item) => (
                            <div className="links" key={item.title}>
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.links.map((link) => (
                                        <li key={link} onClick={() => navigate(link.router)}>{link.title}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="footer_end">
                        <div className='madeBy'>
                            Made By
                            <span>Abdelrahman</span>
                            &
                            <span>Shehab</span>
                        </div>
                        <div className="image_footerEnd">
                            <img src={icon} alt="Icon Image" />
                        </div>
                    </div>
                </ContentWrapper>
            </footer>
        </>
    )
}

export default Footer