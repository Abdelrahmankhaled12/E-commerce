import './productTabs.scss'
import Box from './Box'
import { useState } from 'react';
import ProductDetails from '../../../components/product_details/ProductDetails';
import useFetch
  from '../../../hooks/useFetch';
const ProductsTabs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState({});

  const { data, loading, } = useFetch("admin/all_products");

  const products = data?.data.filter((item, index) => {
    if (index <= 5) {
      return item
    }
  })


  return (
    <div className="product_tabs">
      <div className="items_tabs">
        <ul>
          <li className='active'>New Arrivals</li>
          <li>Featured</li>
          <li>Special</li>
        </ul>
      </div>
      <div className="boxes_products">
        {!loading ? (
          products?.map(product => (
            <Box product={product} setDetailsProduct={() => setDetails(product)} openModel={() => setIsOpen(true)} key={product.product_name} />
          ))
        ) : (
          <div>
          </div>
        )}
      </div>
      <ProductDetails isOpen={isOpen} product={details} closeModal={() => setIsOpen(false)} />

    </div>
  )
}

export default ProductsTabs