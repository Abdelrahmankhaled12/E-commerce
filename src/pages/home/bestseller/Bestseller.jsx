/* eslint-disable react-hooks/rules-of-hooks */
import './style.scss'
import { useEffect, useState, useRef } from 'react';
import BoxProduct from '../../../components/boxProduct/BoxProduct';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { shuffleArray } from '../../../utils/functions';


const Bestseller = ({ products }) => {


    const { categories } = useSelector(state => state.data);


    const carouselContainer = useRef();

    const [productsFilter, setProductsFilter] = useState([])

    const [active, setActive] = useState("");

    const [categoriesFilter, setCategoriesFilter] = useState([]);

    useEffect(() => {
        let categoriesFilter = categories.filter((item) => item.num_of_products > 0)
        categoriesFilter = shuffleArray(categoriesFilter).filter((item, index) => index <= 3)
        setCategoriesFilter(categoriesFilter)
        const category = categoriesFilter[0]?.category_name;
        setActive(category)
        let productss = products.filter(item => item.category_name === category)
        setProductsFilter(productss)
    }, [categories, products])



    const productsFilterCategory = (category) => {
        let productss = products.filter(item => item.category_name === category)
        setProductsFilter(productss)
    }



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
                        {
                            <ul>
                                {
                                    categoriesFilter?.map((category) => (
                                        <li onClick={() => { setActive(category.category_name), productsFilterCategory(category.category_name) }} className={active === category.category_name ? "active" : ""} key={category.category_name}>{category.category_name}</li>
                                    ))
                                }
                            </ul>
                        }
                    </div>
                    <div className="div">
                        <button className='arrow' onClick={() => navigation("left")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button className='arrow' onClick={() => navigation("right")}><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>
                </div>
                <div className="boxes_products" ref={carouselContainer}>
                    {
                        productsFilter?.map((product) => (
                            <BoxProduct
                                product={product}
                                widthImage={250}
                                style={"column"}
                                key={product.product_name} />
                        ))
                    }
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Bestseller