import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/about'
import Faqs from './pages/haqs/Faqs'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Login from './admin/pages/login/Login'
import AddProduct from './admin/pages/add_product/AddProduct'
import Add_category from './admin/pages/add_category/Add_category'
import ShowUsers from './admin/pages/show_users/ShowUsers'
import ShowProduct from './admin/pages/show_products/ShowProduct'
import Details from './pages/details/Details'
import Register from './pages/register/Register'
import Checkout from './pages/checkout/Checkout'
import LoginUser from './pages/login/LoginUser'
import PromoCode from './admin/pages/add_promocode/PromoCode'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop/:category" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQs" element={<Faqs />} />
          <Route path="/Contact us" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/details/:category/:product/:id" element={<Details />} />
          <Route path="/Admin" element={<Login />} />
          <Route path="/Admin/add_product" element={<AddProduct />} />
          <Route path="/Admin/categories" element={<Add_category />} />
          <Route path="/Admin/show_users" element={<ShowUsers />} />
          <Route path="/Admin/show_products" element={<ShowProduct />} />
          <Route path="/Admin/add_promocode" element={<PromoCode/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
