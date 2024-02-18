import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import HeroBanner from "./heroBanner/HeroBanner"
import ProductsTabs from "./productTabs/ProductsTabs"
import imgBanner_1 from '../../assets/banner4.webp'
import imgBanner_2 from '../../assets/banner5.webp'
import imgBanner_3 from '../../assets/banner6.webp'
import Bestseller from "./bestseller/Bestseller"
import './style.scss'
import TopProducts from "./topProduct/TopProducts"
import Header from '../../components/header/Header'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from "react";
import Animation from "../../components/animation/Animation"
import { TimaAnimation } from "../../constants"

const Home = ({ products }) => {

  const [animationOff, setAnimationOff] = useState(true);

  useEffect(() => {
    animationOFF()
  }, [])

  const animationOFF = () => {
    setTimeout(() => {
      setAnimationOff(false)
    }, TimaAnimation)
  }
  return (
    <>
      {
        animationOff ? (
          <Animation />
        ) : (
          <>
            <Header />
            <ContentWrapper>
              <HeroBanner />
              <ProductsTabs data={products} />
              <div className="images">
                <div className="effectImage">
                  <img src={imgBanner_1} alt="Banner one" />
                </div>
                <div className="effectImage">
                  <img src={imgBanner_2} alt="Bannner two" />
                </div>
              </div>
              <Bestseller products={products} />
              <div className="effectImage" style={{ marginBottom: "50px" }}>
                <img src={imgBanner_3} alt="Bannner Three" style={{ "width": "100%" }} />
              </div>
              <TopProducts />
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

export default Home