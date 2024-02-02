import './style.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const ImagesProduct = ({ images }) => {

    const [slide_active, setSlide_active] = useState(0)

    const handleButtonClick = (action) => {
        if (action === "right") {
            if (slide_active === images.length - 1) {
                setSlide_active(0)
            } else {
                setSlide_active(slide_active + 1)
            }
        }

        if (action === "left") {
            if (slide_active === 0) {
                setSlide_active(images.length - 1)
            } else {
                setSlide_active(slide_active - 1)
            }
        }
    }

    return (
        <div className='imagesProduct'>
            {images?.map((img, index) => (
                <img src={img} alt='' className={slide_active === index ? 'hide active' : "hide"} />
            ))}
            {images?.length > 1 && (
                <div className="buttons">
                    <button onClick={() => handleButtonClick("left")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button onClick={() => handleButtonClick("right")}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            )}
        </div>
    )
}

export default ImagesProduct