import './style.scss'
import SideBar from '../../components/sidebar/SideBar'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect } from 'react'
const UpdateProduct = () => {
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
      <div className="div">

      </div>
    </div>  )
}

export default UpdateProduct