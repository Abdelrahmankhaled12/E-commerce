import './style.scss'

import Header from "../../components/header/Header"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Footer from '../../components/footer/Footer'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'

const Contact = () => {
  return (
    <>
      <Header />
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
            </div>
          </div>
        </div>
      </ContentWrapper>
      <Icons/>
      <ButtonScroll />
      <Footer />
    </>
  )
}

export default Contact