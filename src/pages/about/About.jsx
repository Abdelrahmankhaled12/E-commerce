import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import './style.scss'
import { useNavigate } from "react-router-dom"
import Icons from "../../components/icons/Icons"
import ButtonScroll from "../../components/buttonScroll/ButtonScroll"
import aboutImage from '../../assets/about.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const About = () => {

  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <div className="about">
        <ContentWrapper>
          <ul>
            <li onClick={() => navigate('/')}>Home /</li>
            <li className="active">About Us</li>
          </ul>
          <div className="story">
            <div className="image">
              <img src={aboutImage} alt="about image" />
            </div>
            <div className="text">
              <h2>Our Story</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quia ipsa necessitatibus aperiam aliquam! Totam aliquid in recusandae similique tempore! Officia odio vero corporis sunt suscipit sed necessitatibus. Beatae, unde.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quia ipsa necessitatibus aperiam aliquam! Totam aliquid in recusandae similique tempore! Officia odio vero corporis sunt suscipit sed necessitatibus. Beatae, unde.</p>
            </div>
          </div>
        </ContentWrapper>
        <div className="body">
          <ContentWrapper>
            <h2>Our services</h2>
            <p className="titlePar">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica</p>
            <div className="boxes">
              <div className="box">
                <div className="number">01.</div>
                <h4>Sell fashion products</h4>
                <p>Lorem Khaled Ipsum is a major key to success. We the best. Celebrate success right, the only way, apple</p>
              </div>
              <div className="box">
                <div className="number">02.</div>
                <h4>Custom works</h4>
                <p>Lorem Khaled Ipsum is a major key to success. We the best. Celebrate success right, the only way, apple</p>
              </div>
              <div className="box">
                <div className="number">03.</div>
                <h4>Worldwide delivery</h4>
                <p>Lorem Khaled Ipsum is a major key to success. We the best. Celebrate success right, the only way, apple</p>
              </div>
            </div>
          </ContentWrapper>
        </div>
        <ContentWrapper>
          <div className="end">
            <div className="icon">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <div className="text">
              We’re just a small fashion store but we come to the world just to make it better, bring the fashion and style to everyone
            </div>
          </div>
        </ContentWrapper>
      </div>
      <Icons />
      <ButtonScroll />
      <Footer />
    </div>
  )
}

export default About