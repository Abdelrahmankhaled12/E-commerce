import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import './style.scss'
import { useNavigate } from "react-router-dom"
import Header from '../../components/header/Header'
import Icons from '../../components/icons/Icons'
import ButtonScroll from '../../components/buttonScroll/ButtonScroll'
import Footer from '../../components/footer/Footer'



const NotFoundPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div className="notFoundPage">
                <ContentWrapper>
                    <BreadCrumb page={"404 Not Found"} />
                    <div className="content">
                        <h1 className='number'>404</h1>
                        <span>COMPONENT NOT FOUND</span>
                        <h2>NOTHING TO SEE HERE!</h2>
                        <p>The page are looking for has been moved or doesn’t exist anymore,
                            if you like you can return to our homepage. If the problem persists,
                            please send us an email to <span>velatheme@gmail.com</span></p>
                        <button onClick={() => navigate("/")}>Continue shopping</button>
                    </div>
                </ContentWrapper>
            </div>
            <Icons />
            <ButtonScroll />
            <Footer />
        </>
    )
}

export default NotFoundPage