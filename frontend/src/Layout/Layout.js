import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import './Layout.css'

function Layout(props) {
  return (
    <div className="layout">
        <Sidebar />
        <div className="layout-container">
            <Navbar /> 
            <div className="layout-children">
              {props.children}
            </div>
        </div>  
    </div>
  )
}

export default Layout