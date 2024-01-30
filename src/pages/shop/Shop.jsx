import "./style.scss"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Categories from "./categories/Categories";
import ProductsShop from "./products/ProductsShop";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const Shop = ({ categories, data_products }) => {

  let { category } = useParams();

  data_products = category === "categories" ? data_products?.data : data_products?.data.filter(item => item.category_name === category);

  return (
    <>
      <div className="shop_products">
        <ContentWrapper>
          <BreadCrumb page={"Products"} />
          <div className="grid">
            <div className="filterCategories">
              <Categories categories={categories} />
            </div>
            <ProductsShop categories={categories} data={data_products} />
          </div>
        </ContentWrapper>
      </div>
    </>

  )
}

export default Shop