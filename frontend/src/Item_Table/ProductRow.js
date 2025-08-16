import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import './ItemTable.css';
import useItems from '../Context/StateContext';
import axios from 'axios';
import { deleteItemRoute } from '../ApiRoutes/ApiRoutes';
import  { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../utilities/toastOptions';
import { Link, useNavigate } from 'react-router-dom';

function ProductRow({ id, index, title, rating, weight, price, quantity, createdAt, updatedAt }) {

    const { items, dispatch } = useItems();
    
    const dest = '/edititem/' + index;
    // console.log(createdAt, updatedAt);

    const handleDelete = async () => {
      await axios.delete(`${deleteItemRoute}/${id}`)
      .then(res => {
        dispatch({
            type: 'DELETE_ITEM',
            id: id,
        })
        toast.success(res.data.mssg, toastOptions)
      })
      .catch( err => {
        console.log(err.response)
        toast.error(err.response.data, toastOptions)
      })
    }   

  return (
        <tr>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{rating}</td>
            <td>${price}</td>
            <td>{weight}kg</td>
            <td>{quantity}</td>
            <td>
                {/* <PreviewIcon style={{color: 'crimson', margin: '0 3px'}} className='table-icons'/> */}
                <Link to={dest}>
                  <EditIcon style={{color: 'purple', margin: '0 3px' }} className='table-icons' />
                </Link>
                <DeleteIcon style={{color: 'green', margin: '0 3px'}} className='table-icons' onClick={handleDelete}/>
            </td>
            <ToastContainer />
        </tr>
  )
}

export default ProductRow