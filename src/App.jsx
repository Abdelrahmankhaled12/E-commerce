import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/about'
import Faqs from './pages/haqs/Faqs'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Login from './admin/pages/login/Login'
import AddProduct from './admin/pages/add_product/AddProduct'
import Add_category from './admin/pages/add_category/Add_category'
import DeleteProduct from './admin/pages/delete_product/DeleteProduct'
import DeleteCategory from './admin/pages/delete_category/DeleteCategory'
import UpdateProduct from './admin/pages/update_product/UpdateProduct'
import ShowUsers from './admin/pages/show_users/ShowUsers'
import ShowProduct from './admin/pages/show_products/ShowProduct'
import DashBoard from './admin/pages/dashboard/DashBoard'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQs" element={<Faqs />} />
          <Route path="/Contact us" element={<Contact />} />
          <Route path="/Admin" element={<Login />} />
          <Route path="/Admin/DashBoard" element={<DashBoard />} />
          <Route path="/Admin/add_product" element={<AddProduct />} />
          <Route path="/Admin/delete_product" element={<DeleteProduct />} />
          <Route path="/Admin/update_product" element={<UpdateProduct />} />
          <Route path="/Admin/add_category" element={<Add_category />} />
          <Route path="/Admin/delete_produxt" element={<DeleteCategory />} />
          <Route path="/Admin/show_users" element={<ShowUsers />} />
          <Route path="/Admin/show_products" element={<ShowProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
