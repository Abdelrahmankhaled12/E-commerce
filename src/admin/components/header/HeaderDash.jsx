import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import ButtonGroupIcon from './buttonGroupIcon/ButtonGroupIcon'
import './style.scss'

const HeaderDash = () => {
    return (
        <header className='headerDashboard'>
            <ContentWrapper>
                <ButtonGroupIcon />
            </ContentWrapper>
        </header>
    )
}

export default HeaderDash