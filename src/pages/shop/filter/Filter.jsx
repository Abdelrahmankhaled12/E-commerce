/* eslint-disable react/prop-types */
import './style.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Categories from "../categories/Categories";
import useFetch from '../../../hooks/useFetch';

const Filter = ({ isOpenFilter, closeModalFilter }) => {
    const { data, } = useFetch("categories");

    return (
        <div className={isOpenFilter ? "filter filter_active" : "filter"}>
            <div className="flex">
                <div className="content">
                    <div className="top">
                        <h2>Filter</h2>
                        <button onClick={() => closeModalFilter()}><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                    <Categories data={data}/>
                </div>
                <div style={{ "flex": "1" }} onClick={() => closeModalFilter()}></div>
            </div>
        </div>
    )
}

export default Filter