import "./style.scss"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import useFetch from "../../hooks/useFetch"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Animation from "../../components/animation/Animation";
import Categories from "./categories/Categories";
import ProductsShop from "./products/ProductsShop";
import { useParams } from "react-router-dom";
import Icons from "../../components/icons/Icons";
import ButtonScroll from "../../components/buttonScroll/ButtonScroll";
import { useNavigate } from "react-router-dom"

const Shop = ({ data, data_products }) => {

  let { category } = useParams();
  const navigate = useNavigate()

  data_products = category === "categories" ? data_products?.data : data_products?.data.filter(item => item.category_name === category);

  return (
    <>
      <div className="shop_products">
        <ContentWrapper>
          <ul className="pageTop">
            <li onClick={() => navigate('/')}>Home /</li>
            <li className="active">Products</li>
          </ul>
          <div className="grid">
            <div className="filterCategories">
              <Categories data={data} />
            </div>
            <ProductsShop data={data_products} />
          </div>
        </ContentWrapper>
      </div>
      <Icons />
      <ButtonScroll />
      <Footer />
    </>

  )
}

export default Shop