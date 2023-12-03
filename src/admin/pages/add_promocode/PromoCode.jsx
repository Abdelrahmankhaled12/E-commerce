import { useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import { addPromoCode } from '../../../utils/api'
import useFetch from '../../../hooks/useFetch'
import './style.scss'

const PromoCode = () => {

    const { data, } = useFetch("admin/all_offers");

    const [valuePromoCode, setValuePromoCode] = useState("")
    const [valueDiscount, setValueDiscount] = useState("")
    const [valueStartDate, setValueStartDate] = useState("")
    const [valueEndDate, setValueEndDate] = useState("")


    const handleClickButtonForm = () => {
        addPromoCode(valuePromoCode , valueDiscount , valueStartDate , valueEndDate)
        setValuePromoCode("")
        setValueDiscount("")
        setValueStartDate("")
        setValueEndDate("")

    }

    return (
        <div className='flex'>
            <SideBar />
            <div className="add_category promoCode">
                <h2>Promo Code</h2>
                <div className="flex">
                    <p>Dashboard</p>
                    <p>Promo Code</p>
                </div>
                <div className="div">
                    <h4>Basic details</h4>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder='Promo Code' value={valuePromoCode} onChange={e => setValuePromoCode(e.target.value)} />
                        <input type="text" placeholder='Discount' value={valueDiscount} onChange={e => setValueDiscount(e.target.value)} />
                        <div>
                            <label htmlFor="">Start Date</label>
                            <input type="date"  value={valueStartDate} onChange={e => setValueStartDate(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">End Date</label>
                            <input type="date" value={valueEndDate} onChange={e => setValueEndDate(e.target.value)} />
                        </div>

                        <div className="buttons">
                            <button className='cancel' type='button' onClick={() =>{
                                        setValuePromoCode("")
                                        setValueDiscount("")
                                        setValueStartDate("")
                                        setValueEndDate("")
                            }}>Cancel</button>
                            <button className='create' type='sumbit' onClick={() => handleClickButtonForm()}>Create</button>
                        </div>
                    </form>
                </div>
                <div className="show_categories">
                    <table>
                        <thead>
                            <tr>
                                <th>Promo Code</th>
                                <th>Discount</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.promocode}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.started_at}</td>
                                    <td>{item.expired_at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PromoCode
