import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import './style.scss'
import Header from '../../components/header/Header'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import Footer from '../../components/footer/Footer'

const TermsOfService = () => {
    return (
        <>
            <Header />
            <div className="terms_of_service">
                <ContentWrapper>
                    <BreadCrumb page={"Terms of service"} />
                    <div className="content">
                        <h4>Terms of service</h4>
                        <p>Accessing this website (“Site”) constitutes your agreement to the following Terms and Conditions (“Terms”). If you do not agree with these Terms, you may not access the Site.</p>
                        <p>We reserve the right to revise these Terms at any time. As such, you should check these Terms periodically. Changes will not apply to any orders we have already accepted unless the law requires otherwise. If you violate any of the terms of these Terms you will have your access canceled and you may be permanently banned from accessing the Site. If you access the Site after we have posted changes to these Terms, such access shall constitute your acceptance of those changes, whether or not you actually reviewed them. At the bottom of this page, we will notify you of the date these Terms were last updated.</p>
                    </div>
                </ContentWrapper>
            </div>
            <Icons />
            <ButtonScroll />
            <Footer />
        </>
    )
}

export default TermsOfService