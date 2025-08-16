import React, { useState, useEffect } from 'react'
import addImg from '../img/addimg.png'
import  { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddNew.css'
import useItems from '../Context/StateContext';
import axios from 'axios'
import { addItemRoute } from '../ApiRoutes/ApiRoutes';
import { toastOptions } from '../utilities/toastOptions';

function AddNew() {

    const { items, dispatch } = useItems();

    const [imageURL, setImageURL]  = useState("")
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [weight, setWeight] = useState("");
    const [quantity, setQuantity] = useState("");

    let email;
    if (items.user) {
        email = items.user.email;
    } else{
        email = null;
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(addItemRoute, {
            title,
            desc,
            imageURL,
            rating,
            price,
            weight,
            quantity,
            email,
        })
        .then( res => {
            // console.log(res.data)a
            const product = res.data.item.itemDetails;
            const id = res.data.item._id;

            dispatch({
                type: 'ADD_ITEM',
                product: {
                    product,
                    id
                },
            })
            toast.success('Successfully added!', toastOptions)
            setTitle('')
            setDesc('')
            setImageURL('')
            setPrice('')
            setRating('')
            setWeight('')
            setQuantity('')
        })
        .catch( err => {
            console.log(err)
            // toast.error(err.response.data.mssg, toastOptions)
        })
    }

  return (
    <div className="">
        <div className="top">
              <h2>Add New Product</h2>
        </div>
        <div className="bottom">
            <div className="right">
                <form>                    
                    <div className="formInput">
                        <label>Product Name</label>
                        <input type="text" requried placeholder="Type here..." onChange={e => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="formInput">
                        <label>Description</label>
                        <input type="text" requried placeholder="Type here..." onChange={e => setDesc(e.target.value)} value={desc} />
                    </div>
                    <div className="formInput">
                        <label>Image URL</label>
                        <input type="text" requried placeholder="Type here..." onChange={e => setImageURL(e.target.value)} value={imageURL} />
                    </div>
                    <div className="formInput">
                        <label>Rating</label>
                        <input type="text" requried placeholder="4" onChange={e => setRating(e.target.value)} value={rating} />
                    </div>
                    <div className="formInput">
                        <label>Weight</label>
                        <input type="text" requried placeholder="3 (kg)" onChange={e => setWeight(e.target.value)} value={weight} />
                    </div>
                    <div className="formInput">
                        <label>Price</label>
                        <input type="text" requried placeholder="($) 899" onChange={e => setPrice(e.target.value)} value={price} />
                    </div>
                    <div className="formInput">
                        <label>Quantity</label>
                        <input type="text" requried placeholder="10" onChange={e => setQuantity(e.target.value)} value={quantity} />
                    </div>
                    <button type="submit" onClick={HandleSubmit}>Add</button>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AddNew