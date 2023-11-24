import './style.scss'
import BoxBest from './BoxBest'
import useFetch from '../../../hooks/useFetch'
import { useState } from 'react';

const Bestseller = () => {

    const { data, loading, } = useFetch("admin/all_categories");

    const [ active , setActive ] = useState("");
    

    console.log(data)

    return (
        <div className='bestseller'>
            <div className="top">
                <h3>Bestseller Products</h3>
                <div className="items">
                    {!loading ? (
                        <ul>
                            {
                                data?.data.map(category => (
                                    <li onClick={() => setActive(category.category_name)} className={active ===  category.category_name ? "active" : ""} key={category.category_name}>{category.category_name}</li>
                                ))
                            }
                        </ul>
                    ) : (
                        <div>
                        </div>
                    )}
                </div>
            </div>
            <div className="boxes">
                <BoxBest />
                <BoxBest />
                <BoxBest />
                <BoxBest />
            </div>
        </div>
    )
}

export default Bestseller