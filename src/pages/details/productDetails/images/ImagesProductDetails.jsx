import './style.scss'
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const ImagesProductDetails = ({ images }) => {

    const carouselContainer = useRef();

    const [activeImage, setActiveImage] = useState(0)

    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });

        dir === "left" && activeImage !== 0 ?
            setActiveImage(activeImage - 1) :
            dir === "right" && activeImage !== images.length - 1 ?
                setActiveImage(activeImage + 1) : setActiveImage(activeImage)
    };


    return (
        <div className='imagesProductDetails'>
            <div className="image">
                <img src={images[activeImage]} alt="" />
            </div>
            <div className="div">
                {
                    images.length >= 2 && (
                        <div className="images" ref={carouselContainer}>
                            {images.map((img, index) => (
                                <img src={img}
                                    key={img}
                                    alt="product"
                                    className={index === activeImage ? "activeImage" : ""}
                                    onClick={() => setActiveImage(index)}
                                />
                            ))}
                        </div>
                    )
                }
                {
                    images.length >= 4 && (
                        <div className="buttons">
                            <button className='arrow' onClick={() => navigation("left")}><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <button className='arrow' onClick={() => navigation("right")}><FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ImagesProductDetails