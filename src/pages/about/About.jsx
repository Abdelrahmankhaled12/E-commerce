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