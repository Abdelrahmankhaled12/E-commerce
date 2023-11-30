import './style.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import { useState } from 'react'
import { register_sumbit } from '../../utils/api'

const Register = () => {

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const handleClickSubmit = () => {
        register_sumbit(
            (first_name + " " + last_name),
            email,
            password,
            phone,
            address
        )
        console.log(status)
    }

    return (
        <div>
            <Header />
            <div className="register">
                <div className="form">
                    <ContentWrapper>
                        <h3>Create account</h3>
                        <form action="" onSubmit={(e)=> e.preventDefault()}>
                            <div className="div">
                                <label htmlFor="firstname">First name</label>
                                <input type="text" id='firstname' placeholder='First name' onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="div">
                                <label htmlFor="lastname">Last name</label>
                                <input type="text" id='lastname' placeholder='Last name' onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="div">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="div">
                                <label htmlFor="Password">Password</label>
                                <input type="password" id='Password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="div">
                                <label htmlFor="Address">Address</label>
                                <input type="text" id='Address' placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="div">
                                <label htmlFor="Phone">Phone</label>
                                <input type="text" id='Phone' placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button className='register_button'
                                onClick={() => handleClickSubmit()}
                            >
                                Create
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

export default Register