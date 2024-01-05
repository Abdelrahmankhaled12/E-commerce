import './style.scss'
import logo from '../../../assets/logo.avif'
import { useNavigate, useLocation } from 'react-router-dom'
import ButtonList from './buttonList/ButtonList'
import TuneIcon from '@mui/icons-material/Tune';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ListItemIcon from '@mui/material/ListItemIcon';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import CategoryIcon from '@mui/icons-material/Category';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
const SideBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split("/")[2];

    return (
        <div className="sidebar">
            <div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul>
                    <ButtonList openButton={false} buttonNameText="Dashboard" list={[
                        {
                            link: "default",
                            router: "/Admin/categories"
                        },
                        {
                            link: "SaaS",
                            router: "/Admin/categories"
                        },
                    ]}>
                        <TuneIcon />
                    </ButtonList>
                    <ButtonList openButton={false} buttonNameText="Products" list={[
                        {
                            link: "List",
                            router: "/Admin/products"
                        },
                        {
                            link: "Create",
                            router: "/Admin/products/create"
                        },
                    ]}>
                        <BusinessCenterIcon />
                    </ButtonList>
                    <ButtonList openButton={false} buttonNameText="Categories" list={[
                        {
                            link: "List",
                            router: "/Admin/categories"
                        },
                        {
                            link: "Create",
                            router: "/Admin/categories"
                        },
                    ]}>
                        <CategoryIcon />
                    </ButtonList>
                    <ButtonList openButton={false} buttonNameText="Invoices" list={[
                        {
                            link: "List",
                            router: "/Admin/categories"
                        },
                        {
                            link: "Details",
                            router: "/Admin/categories"
                        },
                    ]}>
                        <CreditCardIcon />
                    </ButtonList>
                    <li>
                        <ListItemIcon>
                            <LocalGroceryStoreIcon />
                        </ListItemIcon>
                        Orders
                    </li>
                    <li>
                        <ListItemIcon>
                            <ChecklistIcon />
                        </ListItemIcon>
                        Tasks
                    </li>
                    <li>
                        <ListItemIcon>
                            <GroupsIcon />
                        </ListItemIcon>
                        Customers
                    </li>
                    <li>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        Calender
                    </li>
                    <li>
                        <ListItemIcon>
                            <CelebrationIcon />
                        </ListItemIcon>
                        Promocode
                    </li>
                </ul>
            </div>
            <p>E-commerce</p>
        </div>
    )
}

export default SideBar