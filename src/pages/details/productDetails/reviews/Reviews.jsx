import './style.scss'
import Rating from '@mui/material/Rating';

const Reviews = () => {
  return (
    <div className='reviews'>
        <Rating name="read-only" value={0} readOnly />
        <span className='span'>|</span>
        <p>No reviews</p>
    </div>
  )
}

export default Reviews