/* eslint-disable react-hooks/rules-of-hooks */
import './style.scss'
import useFetch from '../../../hooks/useFetch'
import { useEffect, useState, useRef } from 'react';
import ProductDetails from '../../../components/product_details/ProductDetails';
import BoxProduct from '../../../components/boxProduct/BoxProduct';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Bestseller = () => {

    const carouselContainer = useRef();

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
        setProducts(products)
    }, [data, data_products])



    const productsFilter = (category) => {
        let products = data_products.data.filter(item => item.category_name === category)
        setProducts(products)
    }

    const categories = data?.data.filter((item, index) => {
        if (index <= 3) {
            return item
        }
    })

    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };



    return (
        <div className='bestseller'>
            <ContentWrapper>
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
                                <button className='arrow' onClick={() => navigation("left")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                                <button className='arrow' onClick={() => navigation("right")}><FontAwesomeIcon icon={faChevronRight} /></button>
                            </ul>
                        ) : (
                            <div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="boxes_products" ref={carouselContainer}>
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
            </ContentWrapper>
            <ProductDetails isOpen={isOpen} product={details} closeModal={() => setIsOpen(false)} />
        </div>
    )
}

export default Bestseller