import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import HeroBanner from "./heroBanner/HeroBanner"
import ProductsTabs from "./productTabs/ProductsTabs"
import imgBanner_1 from '../../assets/banner4.webp'
import imgBanner_2 from '../../assets/banner5.webp'
import imgBanner_3 from '../../assets/banner6.webp'
import Bestseller from "./bestseller/Bestseller"
import './style.scss'
import TopProducts from "./topProduct/TopProducts"

const Home = ({ products, categories }) => {

  return (
    <>
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
        <Bestseller data={categories} data_products={products} />
        <img src={imgBanner_3} alt="Bannner Three" style={{ "marginBottom": "60px", "width": "100%" }} />
        <TopProducts data={products} />
      </ContentWrapper>
    </>
  )
}

export default Home