/* eslint-disable react/prop-types */
import BoxProduct from "../../../components/boxProduct/BoxProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import Filter from "../filter/Filter";
import { useState } from "react";

const ProductsShop = ({ categories, data, maxValue, valueFilter, minValue, setFilterValuePrice }) => {

    const [filterOpen, setFilterOpen] = useState(false)

    return (
        <>
            <div className="products_shop">
                <div className="product-shop_top">
                    <button onClick={() => setFilterOpen(true)}><FontAwesomeIcon icon={faSliders} /> Filter</button>
                    <p className="parTop">Showing 1-35 of 35 Results</p>
                </div>
                {(!data || data.length === 0) ? (
                    <p className="productsEmpty">There are no products currently available for this category. Soon they will be available</p>
                ) : (
                    <div className="boxes_shop">
                        {data?.map((product, index) => (
                            <BoxProduct product={product}
                                widthImage={150}
                                style={"column"}
                                key={index} />
                        ))}
                    </div>
                )}
            </div>
            <Filter
                maxValue={maxValue}
                valueFilter={valueFilter}
                minValue={minValue}
                setFilterValuePrice={(value) => setFilterValuePrice(value)}
                categories={categories}
                isOpenFilter={filterOpen}
                closeModalFilter={() => setFilterOpen(false)}
            />
        </>

    )
}

export default ProductsShop