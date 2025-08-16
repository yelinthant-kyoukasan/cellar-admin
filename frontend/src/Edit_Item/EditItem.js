import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import './EditItem.css'
import ProductDetails from '../Product_Details/ProductDetails'
import useItems from '../Context/StateContext'
import { useParams, useNavigate } from "react-router-dom";
import EditNew from '../Edit_New/EditNew'

function EditItem() {

    const { items, dispatch } = useItems();
    const routeParams = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if ( items.user === null ) {
          navigate('/login');
        } 
      }, [items])

    const getItem = items.invenItems[routeParams.id].itemDetails;
    const created = items.invenItems[routeParams.id].createdAt;
    const updated = items.invenItems[routeParams.id].updatedAt;
    const id = items.invenItems[routeParams.id]._id;
    // console.log(getItem)
    
    const createdTimestamp = new Date(created).getTime();
    const updatedTimestamp = new Date(updated).getTime();

    const createdDay = new Date(createdTimestamp).getDate();
    const createdMonth = new Date(createdTimestamp).toLocaleString('default', { month: 'long'});
    const createdYear = new Date(createdTimestamp).getFullYear();
    const createdHour = new Date(createdTimestamp).getHours();
    const createdMinute = new Date(createdTimestamp).getMinutes();
    const createdSecond = new Date(createdTimestamp).getSeconds();
    const createdDate = `${createdHour}:${createdMinute}:${createdSecond} on ${createdDay}/${createdMonth}/${createdYear}`

    const updatedDay = new Date(updatedTimestamp).getDate();
    const updatedMonth = new Date(updatedTimestamp).toLocaleString('default', { month: 'long'});
    const updatedYear = new Date(updatedTimestamp).getFullYear();
    const updatedHour = new Date(updatedTimestamp).getHours();
    const updatedMinute = new Date(updatedTimestamp).getMinutes();
    const updatedSecond = new Date(updatedTimestamp).getSeconds();
    const updatedDate = `${updatedHour}:${updatedMinute}:${updatedSecond} on ${updatedDay}/${updatedMonth}/${updatedYear}`

    console.log(updatedDate, createdDate)
    // console.log(created, updated)

  return (
    <>
        <Layout>
            <div className="item-details">
                <div className="item-header">
                    <h1>Product Details</h1>
                </div>
                {/* <div className="item-info"> */}
                    <ProductDetails 
                        id={id}
                        title={getItem.title}
                        desc={getItem.desc}
                        imageURL={getItem.imageURL}
                        price={getItem.price}
                        rating={getItem.rating}
                        quantity={getItem.quantity}
                        weight={getItem.weight}
                        createdDate={createdDate}
                        updatedDate={updatedDate}
                    />  
                {/* </div> */}
                <EditNew 
                    eid={id}
                    etitle={getItem.title}
                    edesc={getItem.desc}
                    eimageURL={getItem.imageURL}
                    eprice={getItem.price}
                    erating={getItem.rating}
                    equantity={getItem.quantity}
                    eweight={getItem.weight}
                />
            </div>  
        </Layout>
    </>
  )
}

export default EditItem