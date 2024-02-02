import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/about'
import Faqs from './pages/faqs/Faqs'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Details from './pages/details/Details'
import Checkout from './pages/checkout/Checkout'
import NotFoundPage from './pages/404/NotFoundPage'
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy'
import ShippingPolicy from './pages/shipping-policy/ShippingPolicy'
import TermsOfService from './pages/terms-of-service/termsOfService'
import useFetch from './hooks/useFetch'
import Animation from './components/animation/Animation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDataFromApi } from "./utils/api";
import { setCategories, setProducts } from './store/data'


function App() {
  const { data: products, } = useFetch("products");
  const { data: categories, } = useFetch("categories");


  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataFromApi("categories")
      .then((res) => {
        dispatch(setCategories(res.data))
      })

    fetchDataFromApi("products")
      .then((res) => {
        dispatch(setProducts(res.data))
      })
      
  }, []);

  return (
    <>
      {(!products && !categories) && <Animation />}
      {
        (products && categories) && (
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home products={products.data} categories={categories.data} />} />
                <Route path="/Shop/:category" element={<Shop categories={categories.data} data_products={products} />} />
                <Route path="/About" element={<About />} />
                <Route path="/FAQs" element={<Faqs />} />
                <Route path="/Contact-us" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/details/:category/:product/:id" element={<Details data_products={products.data} />} />
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
    </>
  )
}

export default App
