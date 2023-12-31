
import { useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { Add_Product } from "../../../../utils/api";
import SideBar from "../../../components/sidebar/SideBar";
import './style.scss'


const CreateProducts = () => {
    const [product_name, setProduct_name] = useState("")
    const [product_priceOld, setProduct_priceOld] = useState(0)
    const [product_priceNew, setProduct_priceNew] = useState(0)
    const [product_stock, setProduct_stock] = useState("")
    const [product_description, setProduct_description] = useState("")
    const [product_category, setProduct_category] = useState("")
    const [product_image, setProduct_image] = useState("")



    const formSumbit = () => {
        Add_Product(product_name, product_description, product_priceOld, product_priceNew, product_stock, product_category, product_image);
    }

    const { data, loading, } = useFetch("admin/all_categories");


    return (
        <div className="flex">
            <SideBar />
            <div className="add_product">
                <h2>Create a new product</h2>
                <div className="flex">
                    <p>Dashboard</p>
                    <p>Product</p>
                    <p>Create</p>
                </div>
                <div className="div">
                    <h4>Basic details</h4>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Product Name " onChange={(e) => setProduct_name(e.target.value)} />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Description" onChange={(e) => setProduct_description(e.target.value)}>

                        </textarea>
                        <input type="number" name="" id="" placeholder="Price Old" onChange={(e) => setProduct_priceOld(e.target.value)} />
                        <input type="number" name="" id="" placeholder="Price New" onChange={(e) => setProduct_priceNew(e.target.value)} />
                        <input type="number" name="" id="" placeholder="Stock" onChange={(e) => setProduct_stock(e.target.value)} />
                        {!loading ? (
                            <select onChange={(e) => setProduct_category(e.target.value)} >
                                {
                                    data?.data.map(category => (
                                        <option value={category.category_id} key={category.category_name}>{category.category_name}</option>
                                    ))
                                }
                            </select>
                        ) : (
                            <div>
                            </div>
                        )}
                        <input type="text" name="" id="" onChange={(e) => setProduct_image(e.target.value)} />
                        <div className="buttons">
                            <button className='cancel' type='button'>Cancel</button>
                            <button className='create' type='sumbit' onClick={() => formSumbit()}>Create</button>
                        </div>            </form>
                </div>
                <div className="show_categories">

                </div>
            </div>

        </div>
    )
}

export default CreateProducts