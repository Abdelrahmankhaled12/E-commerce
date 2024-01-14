import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/about'
import Faqs from './pages/faqs/Faqs'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Details from './pages/details/Details'
import Checkout from './pages/checkout/Checkout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop/:category" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQs" element={<Faqs />} />
          <Route path="/Contact-us" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/details/:category/:product/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
