import './heroBanner.scss'
import banner_1 from '../../../assets/banner1.avif'
import banner_2 from '../../../assets/banner2.avif'
import Carousel from '../../../components/carousel/Carousel'

const HeroBanner = () => {
    return (
        <div className='heroBanner'>
            <Carousel />
            <div className="images">
                <div className="img effectImage">
                    <img src={banner_1} alt="" className="effectImage" />
                </div>
                <div className="img effectImage">
                    <img src={banner_2} alt="" className="effectImage" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner