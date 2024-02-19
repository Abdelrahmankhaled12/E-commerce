import './style.scss'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import MapComponent from './map/MapComponent'
import Header from '../../components/header/Header'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import Footer from '../../components/footer/Footer'
import { useEffect, useState } from "react"
import Animation from "../../components/animation/Animation"
import { TimaAnimation } from "../../constants"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { ContactUs } from '../../utils/api'

const Contact = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [animationOff, setAnimationOff] = useState(true);


  useEffect(() => {
    animationOFF()
  }, [])

  const animationOFF = () => {
    setTimeout(() => {
      setAnimationOff(false)
    }, TimaAnimation)
  }

  const handleClickButtonForm = () => {

    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }

    ContactUs(data)
      .then(responseData => {
        if (responseData.status === 201) {
          Swal.fire({
            title: "submit a request!",
            text: `We will contact you shortly regarding your request.`,
            icon: "success"
          })
          setName("")
          setEmail("")
          setPhone("")
          setMessage("")
        }
      })
      .catch(error => {
      });
  }


  return (
    <>
      {
        animationOff ?
          (
            <Animation />
          ) : (
            <>
              <Header />
              <MapComponent />
              <ContentWrapper>
                <div className="contactUS">
                  <div className="grid">
                    <div className="content">
                      <h3>Find us here.</h3>
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
                    <div className="form">
                      <h3>Contact.</h3>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="gridInputs">
                          <div className="div">
                            <label htmlFor="name">Name <span>*</span></label>
                            <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                          </div>
                          <div className="div">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" id='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                          <div className="div">
                            <label htmlFor="phone">Phone number <span>*</span></label>
                            <input type="text" id='phone' required value={phone} onChange={(e) => setPhone(e.target.value)} />
                          </div>
                        </div>
                        <div className="div">
                          <label htmlFor="message">Message <span>*</span></label>
                          <textarea name="" id="message" cols="30" rows="10" required value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                        </div>
                        <button type='submit' onClick={() => handleClickButtonForm()}>Send Message</button>
                      </form>
                    </div>
                  </div>
                </div>
              </ContentWrapper>
              <Icons />
              <ButtonScroll />
              <Footer />
            </>
          )
      }
    </>

  )
}

export default Contact