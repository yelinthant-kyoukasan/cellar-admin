import React from 'react'
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import useItems from '../Context/StateContext';

function Sidebar() {

  const navigate = useNavigate();
  const { items, dispatch } = useItems();


  const handleLogout = () => {
    dispatch({
      type: 'LOG_OUT',
    })
  }

  return (
    <div className="sidebar">
        <div className="sidebar-top">
          <Link to="/">
            <p className="sidebar-title">cellaradmin</p>        
          </Link>
        </div>
        <div className="sidebar-middle">
            <ul>
              <p className="title">MAIN</p>
              <Link to="/">
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
              </Link>
              <p className="title">LISTS</p>
                <li>
                  <PeopleAltIcon className="icon"/>
                  <span>Customers</span>
                </li>
                <Link to="/inventory">
                  <li>
                    <InventoryIcon className="icon"/>
                    <span>Inventory</span>
                  </li> 
                </Link>
                <li>
                  <LocalShippingIcon className="icon"/>
                  <span>Orders</span>
                </li>
              <p className="title">USER</p>
                <Link to="/profile">
                  <li>
                    <PersonIcon className="icon"/>
                    <span>Profile</span>
                  </li>
                </Link>
                <li onClick={handleLogout}>
                  <LogoutIcon className="icon"/>
                  <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="sidebar-bottom">
          <div className="themeColor"></div>
          <div className="themeColor"></div>
        </div>
    </div>
  )
}

export default Sidebar