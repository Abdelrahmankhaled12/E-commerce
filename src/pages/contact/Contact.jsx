import './style.scss'
import Header from "../../components/header/Header"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Footer from '../../components/footer/Footer'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import MapComponent from './map/MapComponent'

const Contact = () => {
  return (
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
              <form>
                <div className="gridInputs">
                  <div className="div">
                    <label htmlFor="name">Name <span>*</span></label>
                    <input type="text" id="name" required/>
                  </div>
                  <div className="div">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" id='email' required/>
                  </div>
                  <div className="div">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text"  id='phone'/>
                  </div>
                </div>
                <div className="div">
                    <label htmlFor="message">Message <span>*</span></label>
                    <textarea name="" id="message" cols="30" rows="10" required></textarea>
                  </div>
                  <button type='submit'>Send Message</button>
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

export default Contact