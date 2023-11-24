import logo from '../../../assets/logo.avif'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <ContentWrapper>
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="content_box">
                    <div className="form">
                        <h3>Hi, Admin</h3>
                        <form action="">
                            <div className="email">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <input type="email" placeholder='Email Address...' />
                            </div>
                            <div className="password">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faLock} />
                                </div>
                                <input placeholder='Password...' type="password" />
                            </div>
                            <button>Log In</button>
                        </form>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Login