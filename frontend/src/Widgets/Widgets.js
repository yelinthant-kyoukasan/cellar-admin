import React from 'react'
import './Widgets.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom';


function Widgets( { type } ) {

    let data;

    switch(type){
        case 'USER':
            data = {
                title: 'Customers',
                number: "720",
                text: "See all customers",
                icon: ( <PeopleAltIcon className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}
                />
                )
            }
        break;
        case 'ORDERS':
            data = {
                title: 'Orders',
                number: "108",
                text: "See all orders",
                icon: ( <LocalShippingIcon className="icon" style={{
                    color: "purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                }}/>
                )
            }
        break;
        case 'INVENTORY':
            data = {
                title: 'Inventory',
                number: "80",
                text: "See all items",
                link: "/inventory",
                icon: (<InventoryIcon className="icon"
                style={{
                    color: "green",
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                }}/>)
            }
        break;
        default:
        break;
    }

  return (
    <div className="widget">
        <div className="widget-second">
            <p className="title">{data.title}</p>
            <p className="number">{data.number}</p>
            <div className="last-row">
                <Link to={data.link}>
                    <p>{data.text}</p>
                </Link>
                <Link to={data.link}>
                    {data.icon}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Widgets