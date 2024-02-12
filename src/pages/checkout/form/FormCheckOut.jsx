import CardMethod from '../card/CardMethod';
import { useState } from 'react';
import './style.scss'
import { postalCodeCheck } from './functionFormCheckOut';

const FormCheckOut = () => {

  const [governorate, setGovernorate] = useState("")
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");


  console.log(postalCodeCheck(postal))

  return (
    <div className='formCheck'>
      <form action="">
        <h3>Contact</h3>
        <input
          placeholder='Email or mobile Phone number'
          id='emailOrphone'
          type='text'
          onChange={(e) => setEmailOrPhone(e.target.value)}
          value={emailOrPhone}
          required
        />
        <h3>Delivery</h3>
        <div className="gridInputsTwo">
          <input
            placeholder='First name'
            id='firstName'
            type='text'
            className={firstName === "" ? "empty" : ""}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
          <input
            placeholder='Last name'
            id='lastName'
            type='text'
            className={lastName === "" ? "empty" : ""}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </div>
        <input
          placeholder='Address'
          id='address'
          type='text'
          className={address === "" ? "empty" : ""}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        <input
          placeholder='Phone'
          id='phone'
          type='text'
          className={phone === "" ? "empty" : ""}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
        <div className="gridInputsTwo">
          <input
            placeholder='City'
            id='city'
            type='text'
            className={city === "" ? "empty" : ""}
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
          />
          <input
            placeholder='Postal code'
            id='postalCode'
            type='text'
            className={postal === "" ? "empty" : ""}
            onChange={(e) => setPostal(e.target.value)}
            value={postal}
            required
          />
        </div>
        <CardMethod />
        <button className='payNow' type='sumbit'>Pay Now </button>
      </form>
    </div>
  )
}

export default FormCheckOut