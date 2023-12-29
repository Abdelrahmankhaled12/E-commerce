import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import HeroBanner from "./heroBanner/HeroBanner"
import ProductsTabs from "./productTabs/ProductsTabs"
import imgBanner_1 from '../../assets/banner4.webp'
import imgBanner_2 from '../../assets/banner5.webp'
import imgBanner_3 from '../../assets/banner6.webp'
import Bestseller from "./bestseller/Bestseller"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './style.scss'
import Icons from "../../components/icons/Icons"
import ButtonScroll from "../../components/buttonScroll/ButtonScroll"
import useFetch from "../../hooks/useFetch"
import Animation from "../../components/animation/Animation"
import TopProducts from "./topProduct/TopProducts"

const Home = () => {

  const { data, } = useFetch("admin/all_products");


  return (
    <>
      {!data && <Animation />}
      {
        data && (
          <>
            <Header />
            <ContentWrapper>
              <HeroBanner />
              <ProductsTabs data={data} />
              <div className="images">
                <div className="effectImage">
                  <img src={imgBanner_1} alt="Banner one" />
                </div>
                <div className="effectImage">
                  <img src={imgBanner_2} alt="Bannner two" />
                </div>
              </div>
              <Bestseller />
              <img src={imgBanner_3} alt="Bannner Three" style={{ "marginBottom": "60px" , "width" : "100%"}} />
              <TopProducts  data={data} />
            </ContentWrapper>
            <Icons />
            <ButtonScroll />
            <Footer />
          </>
        )}
    </>
  )
}

export default Home