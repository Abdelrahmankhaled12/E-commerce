import React, { useState } from 'react'
import iconPay from '../../../assets/pay.png'
import { MDBInput } from 'mdb-react-ui-kit';
import './style.scss'

const CardMethod = () => {

    const [cardNumber, setCardNumber] = useState("")
    const [expirationData, setExpirationData] = useState("")
    const [securityCode, setSecurityCode] = useState("")
    const [nameOnCard, setNameOnCard] = useState("")

    return (
        <div className="cardMethod">
            <h3>Payment</h3>
            <p>All transactions are secure and encrypted.</p>
            <div className="box">
                <div className="top">
                    <p>Credit card</p>
                    <img src={iconPay} alt="" />
                </div>
                <div className="bodyCard">
                    <MDBInput
                        label='Card Number'
                        id='cardNumber'
                        type='text'
                        className={cardNumber === "" ? "empty" : ""}
                        onChange={(e) => setCardNumber(e.target.value)}
                        value={cardNumber}
                        required
                    />
                    <div className="gridInputsTwo">
                        <MDBInput
                            label='Expiration date (MM / YY)'
                            id='expirationDate'
                            type='text'
                            className={expirationData === "" ? "empty" : ""}
                            onChange={(e) => setExpirationData(e.target.value)}
                            value={expirationData}
                            required
                        />
                        <MDBInput
                            label='Security Code'
                            id='securityCode'
                            type='text'
                            className={securityCode === "" ? "empty" : ""}
                            onChange={(e) => setSecurityCode(e.target.value)}
                            value={securityCode}
                            required
                        />
                    </div>
                    <MDBInput
                        label='Name On Card'
                        id='nameCard'
                        type='text'
                        className={nameOnCard === "" ? "empty" : ""}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        value={nameOnCard}
                        required
                    />
                </div>
            </div>
        </div>
    )
}

export default CardMethod