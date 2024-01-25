import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import './style.scss'

const PrivacyPolicy = () => {
    return (

        <>
            <div className="privacy_policy">
                <ContentWrapper>
                    <BreadCrumb page={"Privacy policy"} />
                    <div className="content">
                        <h4>Privacy policy</h4>
                        <p>We may use tracking pixels/web beacons, cookies and or other technologies to receive and store certain types of information. This information includes Internet Protocol (IP) addresses, browser information, Internet Service Provider (ISP), operating system, date/time stamp and clickstream data. This information helps us customize your website experience and make our marketing messages more relevant. It also allows us to provide features such as storage of items in your cart between visits. This includes our content presented on other websites or mobile applications. In order to provide the best customer experience possible, we also use this information for reporting and analysis purposes, such as how you are shopping our website, performance of our marketing efforts, and your response to those marketing efforts.</p>
                    </div>
                </ContentWrapper>
            </div>
        </>

    )
}

export default PrivacyPolicy