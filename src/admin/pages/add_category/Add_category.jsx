import { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import './style.scss'
import { Add_categoryAPi } from '../../../utils/api'

const Add_category = () => {

    const [value , setValue ] = useState("")

    const handleClickButtonForm = () => {
        Add_categoryAPi(value)
        setValue("")
    }
    
    return (
        <div className='flex'>
            <SideBar />
            <div className="add_category">
                <h2>Create a new category</h2>
                <div className="flex">
                    <p>Dashboard</p>
                    <p>Category</p>
                    <p>Create</p>
                </div>
                <div className="div">
                    <h4>Basic details</h4>
                    <form action="" onSubmit={(e)=> e.preventDefault()}>
                        <input type="text" placeholder='Category Name' value={value} onChange={e => setValue(e.target.value)}/>
                        <div className="buttons">
                            <button className='cancel' type='button' onClick={()=>setValue("")}>Cancel</button>
                            <button className='create' type='sumbit' onClick={()=>handleClickButtonForm()}>Create</button>
                        </div>
                    </form>
                </div>
                <div className="show_categories">

                </div>
            </div>
        </div>
    )
}

export default Add_category
