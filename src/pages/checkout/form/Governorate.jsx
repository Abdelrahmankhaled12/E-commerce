import React from 'react'
import { Governorates } from '../../../constants'

const Governorate = ({ setGovernorate }) => {
    return (
        <div>
            <select onChange={(e) => setGovernorate(e.target.value)}>
                {Governorates.map(governorate => (
                    <option key={governorate} value={governorate}>{governorate}</option>
                ))}
            </select>
        </div>
    )
}

export default Governorate