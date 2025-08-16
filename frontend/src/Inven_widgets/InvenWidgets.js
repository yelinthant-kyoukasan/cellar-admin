import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CancelIcon from '@mui/icons-material/Cancel';
import CategoryIcon from '@mui/icons-material/Category';
import './InvenWidgets.css';
import useItems from '../Context/StateContext';

function InvenWidgets({type}) {

    let data;
    const { items, dispatch } = useItems();
    // console.log(items.invenItems.length); debugging

    switch(type){
        case 'total_items':
            data = {
                title: "Total Items",
                amount: items.numItems,
                bgc: "rgba(255, 0, 0, 0.2)",
                icon: (<ShoppingCartIcon 
                    style={{
                        fontSize: "xxx-large",
                        color: "crimson",
                    }}/>),
            }
        break;

        case 'store_value':
            data = {
                title: "Total Store Value",
                amount: items.storeValue.toFixed(2),
                bgc: "rgba(128, 0, 128, 0.2)",
                icon: (<MonetizationOnIcon style={{
                    fontSize: "xxx-large",
                    color: "purple",
                }}/>),
            }
        break;

        case 'out_of_stock':
            data = {
                title: "Out Of Stock",
                amount: items.outof_stock,
                bgc: "rgba(218, 165, 32, 0.2)",
                icon: (<CancelIcon style={{
                    fontSize: "xxx-large",
                    color: "green",
                }} />),
            }
        break;

        case 'categories':
            data = {
                title: "Average Rating",
                amount: items.rating.toFixed(2),
                bgc: "#97A3AB",
                icon: (<CategoryIcon style={{
                    fontSize: "xxx-large",
                    color: "#2B4552",
                }} />),
            }
        break;

        default:
        break;
    }

  return (
    <div className="inven-widget" style={{backgroundColor: `${data.bgc}`}}>
        <div className="inven-title">
            <p>{data.title}</p>
        </div>
        <div className="inven-below">
            <div className="inven-icon">
                {data.icon}
            </div>
            <div className="inven-amount">
                <p>{data.amount}</p>
            </div>
        </div>
    </div>
  )
}

export default InvenWidgets