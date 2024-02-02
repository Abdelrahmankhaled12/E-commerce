import "./style.scss"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Categories from "./categories/Categories";
import ProductsShop from "./products/ProductsShop";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import Header from '../../components/header/Header'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import Footer from '../../components/footer/Footer'
import { findLowestPrice, findMaxPrice, findMinPrice } from "../../utils/functions";
import { useState, useEffect } from "react";

const Shop = ({ categories, data_products }) => {

  let { category } = useParams();
  const [price, setPrice] = useState(0)


  data_products = category === "categories" ? data_products?.data : data_products?.data.filter(item => item.category_name === category);

  let data = price === 0 ? data_products : findLowestPrice(data_products, price);
  console.log(data)

  const [valueFilter, setValueFilter] = useState(0)

  const [maxValue, setMaxValue] = useState(0)
  const [minValue, setMinValue] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const maxPrice = await findMaxPrice(data_products);
      const minPrice = await findMinPrice(data_products);
      setMaxValue(maxPrice);
      setMinValue(minPrice);
      setValueFilter(maxPrice)
    };

    fetchData();
  }, [category]);

  return (
    <>
      <Header />
      <div className="shop_products">
        <ContentWrapper>
          <BreadCrumb page={"Products"} />
          <div className="grid">
            <div className="filterCategories">
              <Categories
                categories={categories}
                maxValue={maxValue}
                valueFilter={valueFilter}
                minValue={minValue}
                setFilterValuePrice={(value) => { setPrice(value), setValueFilter(value) }} />
            </div>
            <ProductsShop
              categories={categories}
              data={data}
              maxValue={maxValue}
              valueFilter={valueFilter}
              minValue={minValue}
              setFilterValuePrice={(value) => { setPrice(value), setValueFilter(value) }}
            />
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