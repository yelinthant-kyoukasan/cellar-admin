import React, { useState, useEffect } from 'react'
import addImg from '../img/addimg.png'
import  { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditNew.css'
import useItems from '../Context/StateContext';
import axios from 'axios'
import { addItemRoute, updateItemRoute } from '../ApiRoutes/ApiRoutes';
import { toastOptions } from '../utilities/toastOptions';

function EditNew({ eid, etitle, edesc, erating, eprice, eweight, eimageURL, equantity }) {

    const { items, dispatch } = useItems();
    // console.log(items)

    let email;
    if (items.user) {
        email = items.user.email;
    } else{
        email = null;
    }

    // console.log(email)

    const [imageURL, setImageURL]  = useState(eimageURL)
    const [title, setTitle] = useState(etitle);
    const [desc, setDesc] = useState(edesc);
    const [price, setPrice] = useState(eprice);
    const [rating, setRating] = useState(erating);
    const [weight, setWeight] = useState(eweight);
    const [quantity, setQuantity] = useState(equantity);


    // console.log(title, desc, imageURL, rating, price, weight, quantity, email)
    // console.log(`${updateItemRoute}/${eid}`)

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${updateItemRoute}/${eid}`, {
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
            // console.log(res.data)
            dispatch({
                type: 'CHANGE_ITEM',
                id: eid,
                product: res.data.newItem,
            })
            setTitle(title)
            setDesc(desc)
            setImageURL(imageURL)
            setPrice(price)
            setRating(rating)
            setWeight(weight)
            setQuantity(quantity)
            toast.success("Successfully Edited", toastOptions)
        })
        .catch( err => {
            console.log(err)
            toast.error("Cannot Edit", toastOptions)
        })
    }

  return (
    <div className="top-container">
        <div className="top">
              <h2>Edit Product</h2>
        </div>
        <div className="bottom">
            <div className="right">
                <form>                    
                    <div className="formInput">
                        <label>Product Name</label>
                        <input type="text" requried placeholder={title} onChange={e => setTitle(e.target.value)} value={title} />
                    </div>
                    <div className="formInput">
                        <label>Description</label>
                        <input type="text" requried placeholder={desc} onChange={e => setDesc(e.target.value)} value={desc} />
                    </div>
                    <div className="formInput">
                        <label>Image URL</label>
                        <input type="text" requried placeholder={imageURL} onChange={e => setImageURL(e.target.value)} value={imageURL} />
                    </div>
                    <div className="formInput">
                        <label>Rating</label>
                        <input type="text" requried placeholder={rating} onChange={e => setRating(e.target.value)} value={rating} />
                    </div>
                    <div className="formInput">
                        <label>Weight</label>
                        <input type="text" requried placeholder={weight} onChange={e => setWeight(e.target.value)} value={weight} />
                    </div>
                    <div className="formInput">
                        <label>Price</label>
                        <input type="text" requried placeholder={price} onChange={e => setPrice(e.target.value)} value={price} />
                    </div>
                    <div className="formInput">
                        <label>Quantity</label>
                        <input type="text" requried placeholder={quantity} onChange={e => setQuantity(e.target.value)} value={quantity} />
                    </div>
                    <button type="submit" onClick={handleSubmit}>Save</button>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default EditNew