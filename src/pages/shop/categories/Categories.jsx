/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";

const Categories = ({ categories , maxValue , minValue , valueFilter  , setFilterValuePrice}) => {

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
            <h3 style={{ 'marginTop': "40px" }}>Filter By</h3>
            <div className="filterPrice">
                <h5>price</h5>
                <div className="boxesFilterPrice">
                    <div className="box">
                        <span>$</span>
                        <span>0</span>
                    </div>
                    <p>To</p>
                    <div className="box">
                        <span>$</span>
                        <span>{valueFilter}</span>
                    </div>
                </div>
            </div>
            <Slider
                value={valueFilter}
                aria-label="Default"
                valueLabelDisplay="auto"
                min={minValue}
                max={maxValue}
                onChange={(e) => setFilterValuePrice(e.target.value)}
            />
        </div>
    )
}

export default Categories