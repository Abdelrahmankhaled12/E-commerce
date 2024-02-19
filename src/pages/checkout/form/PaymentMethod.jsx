import React from 'react'
import { faWallet  } from '@fortawesome/free-solid-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PaymentMethod = () => {
    return (
        <div>
            <h3>Payment method</h3>
            <div className='paymentMethod'>
                <div className="cash">
                    <input type="radio" name="paymentMethod" id="cash" />
                    <label htmlFor='cash'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faWallet} />
                        </div>
                        <p>Cash Delivery</p>
                    </label>
                </div>
                <div className="cash">
                    <input type="radio" name="paymentMethod" id="visa" />
                    <label htmlFor='visa'>
                        <div className="icon">
                        <FontAwesomeIcon icon={faCcVisa} />
                        </div>
                        <p>Visa</p>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod