import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import HeroBanner from "./heroBanner/HeroBanner"
import ProductsTabs from "./productTabs/ProductsTabs"
import imgBanner_1 from '../../assets/banner4.webp'
import imgBanner_2 from '../../assets/banner5.webp'
import imgBanner_3 from '../../assets/banner6.webp'
import Bestseller from "./bestseller/Bestseller"
import m1 from '../../assets/m1.webp'
import m2 from '../../assets/m2.avif'
import m3 from '../../assets/m3.webp'
import m4 from '../../assets/m4.webp'
import m5 from '../../assets/m5.webp'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import './style.scss'

const Home = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <HeroBanner />
        <ProductsTabs />
        <div className="images">
          <img src={imgBanner_1} alt="Banner one" />
          <img src={imgBanner_2} alt="Bannner two" />
        </div>
        <Bestseller />
        <img src={imgBanner_3} alt="Bannner Three" />
        <div className="cards">
          <img src={m1} alt="" />
          <img src={m2} alt="" />
          <img src={m3} alt="" />
          <img src={m4} alt="" />
          <img src={m5} alt="" />
        </div>
      </ContentWrapper>
      <Footer />
    </>
  )
}

export default Home