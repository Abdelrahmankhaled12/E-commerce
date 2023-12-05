import SideBar from '../../components/sidebar/SideBar'
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect } from 'react'

const ShowUsers = () => {

  const { data, } = useFetch("admin/all_users");
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
        <h2>Show Users</h2>
        <div className="flex">
          <p>Dashboard</p>
          <p>Users</p>
          <p>Show</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.users.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowUsers