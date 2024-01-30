/* eslint-disable react/prop-types */

import { useParams, useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";

const Categories = ({ categories }) => {

    let { category } = useParams();
    const navigate = useNavigate();

    return (
        <div className="categories">
            <h3>Categories</h3>
            <ul>
                {categories.map(item => (
                    <li
                        key={item.category_name}
                        className={item.category_name === category ? "active" : ""}
                        onClick={() => navigate(`/Shop/${item.category_name}`)}
                    >{item.category_name}</li>
                ))}
            </ul>
            <h3 style={{'marginTop' : "40px"}}>Filter By</h3>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </div>
    )
}

export default Categories