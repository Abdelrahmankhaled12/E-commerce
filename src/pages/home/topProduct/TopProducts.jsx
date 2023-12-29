/* eslint-disable react-hooks/rules-of-hooks */
import './style.scss'
import ContainerProducts from './containerProducts/ContainerProducts';

const TopProducts = ({ data }) => {
    const products = data?.data.filter((item, index) => {
        if (index <= 2) {
            return item
        }
    })

    return (
        <>
            <div className="topProducts">
                <ContainerProducts
                    title={"Top seller Products"}
                    products={products}
                />
                <ContainerProducts
                    title={"On-Sale Products"}
                    products={products}
                />
                <ContainerProducts
                    title={"Top Rated Products"}
                    products={products}
                />
            </div>
        </>
    )
}

export default TopProducts