import React from 'react'
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProfLogo from '../img/profile_logo.jpg';
import InventoryIcon from '@mui/icons-material/Inventory';
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="navbar-search">
            <input type="text" placeholder="SEARCH"/>
            <SearchOutlinedIcon />
        </div>
        <div className="navbar-right">
            <Link  to="/">
                <div className="navbar-item">
                    <AddCircleIcon className="icon-inven"/>
                    <span>Add Item</span>
                </div>
            </Link>
            <Link  to="/inventory">
                <div className="navbar-item">
                    <InventoryIcon className="icon-inven"/>
                    <span>Inventory</span>
                </div>
            </Link>
                {/* <div className="navbar-item">
                <Link  to="/inventory">

                    <InventoryIcon className="icon-inven"/>
                    <span>Inventory</span>
                    </Link>

                </div> */}
            <div className="night-mode">
                <DarkModeOutlinedIcon />
            </div>
            <div className="navbar-profile">
                <Link to="/profile">
                    <img src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" alt="" className="prof"/>              
                </Link>
            </div>
        </div> 
    </div>
  )
}

export default Navbar