/* eslint-disable react-hooks/rules-of-hooks */
import './style.scss'
import useFetch from '../../../hooks/useFetch'
import { useEffect, useState } from 'react';
import ProductDetails from '../../../components/product_details/ProductDetails';
import BoxProduct from '../../../components/boxProduct/BoxProduct';

const Bestseller = () => {


    const { data, loading, } = useFetch("admin/all_categories");

    const { data: data_products, loading: loading_products, } = useFetch("admin/all_products");

    const [products, setProducts] = useState([])

    const [active, setActive] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const [details, setDetails] = useState({});

    useEffect(() => {
        const category = data?.data[0].category_name;
        setActive(category)
        let products = data_products?.data.filter(item => item.category_name === category)
        products = products?.filter((item, index) => {
            if (index <= 3) {
                return item
            }
        })
        setProducts(products)
    }, [data, data_products])



    const productsFilter = (category) => {
        let products = data_products.data.filter(item => item.category_name === category)
        products = products?.filter((item, index) => {
            if (index <= 3) {
                return item
            }
        })
        setProducts(products)
    }

    const categories = data?.data.filter((item, index) => {
        if (index <= 3) {
            return item
        }
    })



    return (
        <div className='bestseller'>
            <div className="top">
                <h3>Bestseller Products</h3>
                <div className="items">
                    {!loading ? (
                        <ul>
                            {
                                categories?.map((category) => (
                                    <li onClick={() => { setActive(category.category_name), productsFilter(category.category_name) }} className={active === category.category_name ? "active" : ""} key={category.category_name}>{category.category_name}</li>
                                ))
                            }
                        </ul>
                    ) : (
                        <div>
                        </div>
                    )}
                </div>
            </div>
            <div className="boxes_products">
                {!loading_products ? (
                    products?.map((product, index) => (
                        <BoxProduct
                            product={product}
                            setDetailsProduct={() => setDetails(product)}
                            openModel={() => setIsOpen(true)}
                            widthImage={250}
                            style={"column"}
                            key={index} />
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

export default Bestseller