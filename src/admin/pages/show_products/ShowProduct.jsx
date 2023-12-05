import './style.scss'
import SideBar from '../../components/sidebar/SideBar'
import useFetch from '../../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Warning from '../../components/warning/Warning'
import { useState } from 'react'
import { Delete_product } from '../../../utils/api'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect } from 'react'

const ShowProduct = () => {

  const { data, } = useFetch("admin/all_products");

  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState(null)
  const navigate = useNavigate();
  let { loggedAdmin } = useSelector((state) => state.admin);
  useEffect(()=> {
      if(!loggedAdmin) {
          navigate("/Admin")
      }
  }) 
  
  return (
    <div className='flex'>
      <SideBar />
      <div className="show_products">
        <h2>Create a Show Products</h2>
        <div className="flex">
          <p>Dashboard</p>
          <p>Products</p>
          <p>Show</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT_ID</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>STOCK</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item, index) => (
              <tr key={index}>
                <td>{item.product_id}</td>
                <td>
                  <div className='product'>
                    <div className="flex">
                      <img src={item.image[0]} alt="" />
                      <div className="text">
                        <p>{item.product_name}</p>
                        <p className='description'>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.discount}</td>
                <td>{item.stock}</td>
                <td>
                  <button className='remove' onClick={() => {
                    setIsOpen(true)
                    setCategory(item.product_id)
                  }}><FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Warning
        text={"Are you sure you want to delete this Product ?"}
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        remove={() => {
          Delete_product(category)
          setIsOpen(false)
        }}
      />
    </div>
  )
}

export default ShowProduct