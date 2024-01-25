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
import Header from './components/header/Header'
import ShippingPolicy from './pages/shipping-policy/ShippingPolicy'
import TermsOfService from './pages/terms-of-service/termsOfService'
import Footer from "./components/footer/Footer"
import Icons from "./components/icons/Icons"
import ButtonScroll from "./components/buttonScroll/ButtonScroll"
import useFetch from './hooks/useFetch'
import Animation from './components/animation/Animation'

function App() {
  const { data: products, } = useFetch("products");
  const { data: categories, } = useFetch("categories");


  return (
    <>
      {(!products && !categories) && <Animation />}
      {
        (products && categories) && (
          <>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home products={products} categories={categories} />} />
                <Route path="/Shop/:category" element={<Shop data={categories} data_products={products} />} />
                <Route path="/About" element={<About />} />
                <Route path="/FAQs" element={<Faqs />} />
                <Route path="/Contact-us" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/details/:category/:product/:id" element={<Details />} />
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
              <Icons />
              <ButtonScroll />
              <Footer />
            </BrowserRouter>
          </>
        )}
    </>
  )
}

export default App
