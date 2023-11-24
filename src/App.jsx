import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from './components/header/Header'
import Home from './pages/Home/Home'
import About from './pages/about/about'
import Faqs from './pages/haqs/Faqs'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
// import Footer from './components/footer/footer'
import Login from './admin/pages/login/Login'
import AddProduct from './admin/pages/add_product/AddProduct'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQs" element={<Faqs />} />
          <Route path="/Contact us" element={<Contact />} />
          <Route path="/Admin" element={<Login />} />
          <Route path="/Admin/add_product" element={<AddProduct />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
