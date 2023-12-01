import "./style.scss"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import useFetch from "../../hooks/useFetch"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Animation from "../../components/animation/Animation";
import Categories from "./categories/Categories";
import ProductsShop from "./products/ProductsShop";
import { useParams } from "react-router-dom";

const Shop = () => {

  const { data, } = useFetch("admin/all_categories");
  let { data: data_products, } = useFetch("admin/all_products");
  let { category } = useParams();

  console.log(data , category , data_products);

  data_products = category === "categories" ? data_products?.data :  data_products?.data.filter(item => item.category_name ===  category);

  return (
    <>
      {!data_products && <Animation />}
      {data_products && (
        <>
          <Header />
          <div className="shop_products">
            <ContentWrapper>
              <div className="grid">
                <Categories data={data} />
                <ProductsShop data={data_products} />
              </div>
            </ContentWrapper>
          </div>
          <Footer />
        </>
      )}
    </>

  )
}

export default Shop