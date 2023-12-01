/* eslint-disable react/prop-types */
import BoxProduct from "../../../components/boxProduct/BoxProduct";

const ProductsShop = ({ data }) => {
    return (
        <div className="products_shop">
            <p>Showing 1-35 of 35 Results</p>
            <div className="boxes_shop">
                {data?.map((product, index) => (
                    <BoxProduct product={product}
                        widthImage={150}
                        style={"column"}
                        key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProductsShop