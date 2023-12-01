/* eslint-disable react/prop-types */

import { useParams , useNavigate } from "react-router-dom";

const Categories = ({ data }) => {

    let { category } = useParams();
    const navigate = useNavigate();

    return (
        <div className="categories">
            <h3>Categories</h3>
            <ul>
                {data?.data.map(item => (
                    <li 
                    key={item.category_name}
                    className={item.category_name === category ? "active" : ""}
                    onClick={()=>navigate(`/Shop/${item.category_name}`) }
                    >{item.category_name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories