import { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import './style.scss'
import { Add_categoryAPi, Delete_category } from '../../../utils/api'
import useFetch from '../../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Warning from '../../components/warning/Warning'

const Add_category = () => {

    const { data, } = useFetch("admin/all_categories");
    const [ isOpen , setIsOpen ] = useState(false)
    const [ category , setCategory ] = useState(null)
    const [value, setValue] = useState("")


    const handleClickButtonForm = () => {
        Add_categoryAPi(value)
        setValue("")
    }



    return (
        <div className='flex'>
            <SideBar />
            <div className="add_category">
                <h2>Categories</h2>
                <div className="flex">
                    <p>Dashboard</p>
                    <p>Category</p>
                </div>
                <div className="div">
                    <h4>Basic details</h4>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder='Category Name' value={value} onChange={e => setValue(e.target.value)} />
                        <div className="buttons">
                            <button className='cancel' type='button' onClick={() => setValue("")}>Cancel</button>
                            <button className='create' type='sumbit' onClick={() => handleClickButtonForm()}>Create</button>
                        </div>
                    </form>
                </div>
                <div className="show_categories">
                    <table>
                        <thead>
                            <tr>
                                <th>CATEGORY_ID</th>
                                <th>CATEGORY</th>
                                <th>NUMBER OF PRODUCTS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.category_id}</td>
                                    <td>{item.category_name}</td>
                                    <td>{item.num_of_products}</td>
                                    <td>
                                        <button className='remove' onClick={()=> {
                                            setIsOpen(true)
                                            setCategory(item.category_id)
                                        }}><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Warning 
            text="Are you sure you want to delete this category? This decision will lead to the deletion of products also related to this category "
            isOpen={isOpen}
            closeModel={()=> setIsOpen(false)}
            remove = {()=> {
                Delete_category(category)
                setIsOpen(false)
            }}
            />
        </div>
    )
}

export default Add_category
