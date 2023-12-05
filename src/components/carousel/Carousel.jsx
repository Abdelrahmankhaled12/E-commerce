import './style.scss'
import slide_1 from '../../assets/slide1.webp'
import slide_2 from '../../assets/slide2.webp'
import slide_3 from '../../assets/slide3.webp'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight , faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const Carousel = () => {

    const [ slide_active , setSlide_active ] = useState(0)

    const handleButtonClick = (action) => {
        if(action === "right") {
            if(slide_active === 2) {
                setSlide_active(0)
            }else {
                setSlide_active(slide_active + 1)
            }
        }

        if(action === "left") {
            if(slide_active === 0) {
                setSlide_active(2)
            }else {
                setSlide_active(slide_active - 1)
            }
        }
    }

    setTimeout(()=> {
        setSlide_active(slide_active === 0 ? 1 : slide_active === 1 ? 2 : 0)
    },6000)

    
    return (
        <div className='slider'>
            <img src={slide_1} alt='' />
            <img src={slide_2} alt='' className={slide_active === 1 ? 'hide active' : "hide"} />
            <img src={slide_3} alt='' className={slide_active === 2 ? 'hide active' : "hide"} />
            <div className="buttons">
                <button onClick={()=>handleButtonClick("left")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <button onClick={()=>handleButtonClick("right")}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            <ul>
                <li className={slide_active === 0 ? 'active' : ""} onClick={()=>setSlide_active(0)}></li>
                <li className={slide_active === 1 ? 'active' : ""} onClick={()=>setSlide_active(1)}></li>
                <li className={slide_active === 2 ? 'active' : ""} onClick={()=>setSlide_active(2)}></li>
            </ul>
        </div>
    )
}

export default Carousel