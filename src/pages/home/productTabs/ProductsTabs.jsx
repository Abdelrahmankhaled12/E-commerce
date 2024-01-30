/* eslint-disable react/prop-types */
import './productTabs.scss'
import BoxProduct from '../../../components/boxProduct/BoxProduct';
import { shuffleArray } from '../../../utils/functions';

const ProductsTabs = ({ data }) => {

  const products = shuffleArray(data).filter((item, index) => {
    if (index <= 5) {
      return item
    }
  })

  return (
    <div className="product_tabs">
      <div className="boxes_products">
        {
          products?.map(product => (
            <BoxProduct
              product={product}
              widthImage={150}
              style={""}
              key={product.product_name} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductsTabs