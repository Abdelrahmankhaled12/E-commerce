import SideBar from '../../components/sidebar/SideBar'
import useFetch from '../../../hooks/useFetch';

const ShowUsers = () => {

  const { data, } = useFetch("admin/all_users");

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