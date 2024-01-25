import { useNavigate } from "react-router-dom"
import './style.scss'
const BreadCrumb = ({ page }) => {

    const navigate = useNavigate()

    return (
        <div className='breadcrumb'>
            <ul>
                <li onClick={() => navigate('/')}>Home /</li>
                <li className="active">{page}</li>
            </ul>
        </div>
    )
}

export default BreadCrumb