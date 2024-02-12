import './style.scss'
import ProductDetails from '../../../components/product_details/ProductDetails'
import BoxProduct from '../../../components/boxProduct/BoxProduct'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { filterProducts } from '../../../utils/functions'

const MaybeYouLike = ({ productID, data }) => {

    const { products } = useSelector(state => state.data)

    const [isOpen, setIsOpen] = useState(false);

    const [details, setDetails] = useState({});

    const [dataFilter, setDataFilter] = useState(null);

    useEffect(() => {
        setDataFilter(filterProducts(data, products, productID))
    },[])
    
    return (
        <>
            {dataFilter && (
                <div className='bestseller'>
                    <div className="top">
                        <h3>Maybe You Like</h3>
                    </div>
                    <div className="boxes_products">
                        {
                            dataFilter?.map((product, index) => (
                                <BoxProduct
                                    product={product}
                                    setDetailsProduct={() => setDetails(product)}
                                    openModel={() => setIsOpen(true)}
                                    widthImage={250}
                                    style={"column"}
                                    key={index} />
                            ))
                        }
                    </div>
                    <ProductDetails isOpen={isOpen} product={details} closeModal={() => setIsOpen(false)} />
                </div>
            )}
        </>
    )
}

export default MaybeYouLike