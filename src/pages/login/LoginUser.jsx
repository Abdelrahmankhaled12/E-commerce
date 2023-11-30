import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import { useState } from 'react'
import { login_submit } from '../../utils/api'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogged , setUserData } from '../../store/login'

const LoginUser = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div>
            <Header />
            <div className="register">
                <div className="form">
                    <ContentWrapper>
                        <h3>Login</h3>
                        <form action="" onSubmit={(e) => e.preventDefault()}>
                            <div className="div">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="div">
                                <label htmlFor="Password">Password</label>
                                <input type="password" id='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button className='register_button'
                                onClick={() => {
                                    login_submit(email, password).then((res) => {
                                        if(res.message === "You are logged in" ) {
                                            dispatch(setLogged(true))
                                            dispatch(setUserData(res.data))
                                            navigate("/")
                                        }
                                        console.log(res)
                                    }).catch(() => {
                                        console.log("Something went wrong")
                                    })
                                }}
                            >
                                SIGN IN
                            </button>
                        </form>
                    </ContentWrapper>
                </div>
            </div>
            <Icons />
            <ButtonScroll />
            <Footer />
        </div>
    )
}

export default LoginUser