import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'

const SubScribers = () => {
    return (
        <div className='subscribe'>
            <ContentWrapper>
                <div className="content">
                    <div className="text">
                        <h3>SIGN UP FOR NEWSLETTER</h3>
                        <p>Join 40.00+ Subscribers and get a new discount coupon on every Saturday.</p>
                    </div>
                    <form action="">
                        <input type="text" className='text_input' placeholder='Enter your email...' />
                        <input type="submit" value="Subscribe"  className='submit_input' />
                    </form>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default SubScribers