import './style.scss'
import useFetch from '../../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import BodyContent from '../../components/bodyContent/BodyContent'


const Products = () => {

    const { data, } = useFetch("admin/all_products");

    return (
        <BodyContent>
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
        </BodyContent>
    )
}

export default Products