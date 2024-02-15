import './style.scss'
import ProductDetails from '../../../components/product_details/ProductDetails'
import BoxProduct from '../../../components/boxProduct/BoxProduct'
import { useState } from 'react'
import { shuffleArray } from '../../../utils/functions';

const MaybeYouLike = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [details, setDetails] = useState({});

    const products = shuffleArray(data).filter((item, index) => {
        if (index <= 3) {
            return item
        }
    })


    return (
        <>
            <div className='bestseller'>
                <div className="top">
                    <h3>Maybe You Like</h3>
                </div>
                <div className="boxes_products">
                    {
                        products?.map((product, index) => (
                            <BoxProduct
                                product={product}
                                setDetailsProduct={() => setDetails(product)}
                                openModel={() => setIsOpen(true)}
                                widthImage={150}
                                style={"column"}
                                key={index} />
                        ))
                    }
                </div>
                <ProductDetails isOpen={isOpen} product={details} closeModal={() => setIsOpen(false)} />
            </div>
        </>
    )
}

export default MaybeYouLike