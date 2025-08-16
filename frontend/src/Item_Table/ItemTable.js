import React, { useState, useEffect } from 'react'
import './ItemTable.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import useItems from '../Context/StateContext';
import ProductRow from './ProductRow.js';
import axios from 'axios';
import { getAllItemsRoute } from '../ApiRoutes/ApiRoutes';

function ItemTable() {

    const { items, dispatch } = useItems();

    useEffect(() => {
      let subTotal = 0;
      let out_of_stock = [];
      let rating = 0;
      if(items.invenItems.length > 0){
        items.invenItems.forEach((item, index) => {
            subTotal += (item.itemDetails.price * item.itemDetails.quantity)
            if (item.itemDetails.quantity <= 0) {
              out_of_stock.push(index)
            }
            rating += item.itemDetails.rating
        });
      }
      const avgRating = rating/items.invenItems.length;

      // console.log("This is total-store-value --> " + subTotal)
      // console.log("This is out-of-stock --> " + out_of_stock.length)
      // console.log("This is rating --> "+ avgRating)

      dispatch({
        type:  'UPLOAD',
        outof_stock: out_of_stock.length,
        rating: avgRating,
        storeValue: subTotal,
        numItems: items.invenItems.length,
      })
    }, [])



  return (
    <div className="datatable">
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Product Title</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Weight</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {items.invenItems ? items.invenItems.map((item, index) => 
            <ProductRow 
                index={index}
                key={item._id}
                id={item._id}
                title={item.itemDetails.title}
                rating={item.itemDetails.rating}
                weight={item.itemDetails.weight}
                price={item.itemDetails.price}
                quantity={item.itemDetails.quantity}
                createdAt={item.createdAt}
                updatedAt={item.updatedAt}
            />
        ) : (
            <h1>There are no items</h1>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default ItemTable