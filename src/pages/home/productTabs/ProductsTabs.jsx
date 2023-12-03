/* eslint-disable react/prop-types */
import './productTabs.scss'
import BoxProduct from '../../../components/boxProduct/BoxProduct';
const ProductsTabs = ({ data }) => {
  console.log(data)
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