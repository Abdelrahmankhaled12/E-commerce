/* eslint-disable react-hooks/rules-of-hooks */
import './style.scss'
import ContainerProducts from './containerProducts/ContainerProducts';
import { useSelector } from 'react-redux';
import { shuffleArray } from '../../../utils/functions';

const TopProducts = () => {

    const { products } = useSelector(state => state.data);

    return (
        <>
            <div className="topProducts">
                <ContainerProducts
                    title={"Top seller Products"}
                    products={shuffleArray(products).filter((item, index) => {
                        if (index <= 2) {
                            return item
                        }
                    })}
                />
                <ContainerProducts
                    title={"On-Sale Products"}
                    products={shuffleArray(products).filter((item, index) => {
                        if (index <= 2) {
                            return item
                        }
                    })}
                />
                <ContainerProducts
                    title={"Top Rated Products"}
                    products={shuffleArray(products).filter((item, index) => {
                        if (index <= 2) {
                            return item
                        }
                    })}
                />
            </div>
        </>
    )
}

export default TopProducts