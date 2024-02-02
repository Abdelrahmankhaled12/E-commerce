import { useState } from 'react'
import './style.scss'

const ColorsProduct = ({ colors }) => {

  console.log(colors[0].split("|"))

  const [colorText, setColorText] = useState(colors[0].split("|")[0]);
  const [active, setActive] = useState(0);


  return (
    <div className='colorProductDetails'>
      <div className="text">
        <h5>Color :</h5>
        <p>{colorText}</p>
      </div>
      <ul>
        {colors.map((color, index) => (
          <li className={index === active ? "active" : ""} onClick={() => {
            setColorText(color.split("|")[0])
            setActive(index)
          }} key={color}>
            <div style={{ backgroundColor: color.split("|")[1]}}></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColorsProduct