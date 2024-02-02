import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const BreadCrumbDetails = ({ category, product }) => {

    const navigate = useNavigate();

    return (
        <div className='breadCrumbDetails'>
            <ul>
                <li onClick={() => navigate(`/`)}>Home <FontAwesomeIcon icon={faChevronRight} /></li>
                <li onClick={() => navigate(`/Shop/${category}`)} >{category} <FontAwesomeIcon icon={faChevronRight} /></li>
                <li>{product}</li>
            </ul>
        </div>
    )
}

export default BreadCrumbDetails