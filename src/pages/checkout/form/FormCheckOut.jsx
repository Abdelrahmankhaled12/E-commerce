import { MDBInput } from 'mdb-react-ui-kit';
import SelectGovernorates from './SelectGovernorates'
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
  const [postal , setPostal ] = useState("");
  const [city , setCity ] = useState("");


  console.log(postalCodeCheck(postal))

  return (
    <div className='formCheck'>
      <form action="">
        <h3>Contact</h3>
        <MDBInput
          label='Email or mobile Phone number'
          id='emailOrphone'
          type='text'
          className={emailOrPhone === "" ? "empty" : ""}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          value={emailOrPhone}
          required
          placeholder='e.g. a********54@gmail.com'
        />





    


        <h3>Delivery</h3>
        <div className="gridInputsTwo">
          <MDBInput
            label='First name'
            id='firstName'
            type='text'
            className={firstName === "" ? "empty" : ""}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
          <MDBInput
            label='Last name'
            id='lastName'
            type='text'
            className={lastName === "" ? "empty" : ""}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </div>
        <MDBInput
          label='Address'
          id='address'
          type='text'
          className={address === "" ? "empty" : ""}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
          placeholder='14 Arab Street'
        />

        <MDBInput
          label='Phone'
          id='phone'
          type='text'
          className={phone === "" ? "empty" : ""}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
          style={{ "marginTop": "15px" }}
        />


        <div className="gridInputsThree">
          <MDBInput
            label='City'
            id='city'
            type='text'
            className={city === "" ? "empty" : ""}
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
            placeholder='Ain shams'
          />

          <SelectGovernorates setSelected={(value) => setGovernorate(value)} />


          <MDBInput
            label='Postal code'
            id='postalCode'
            type='text'
            className={postal === "" ? "empty" : ""}
            onChange={(e) => setPostal(e.target.value)}
            value={postal}
            required
            placeholder='3753450'
          />
        </div>

        <CardMethod />
        <button className='payNow' type='sumbit'>Pay Now </button>
      </form>
    </div>
  )
}

export default FormCheckOut