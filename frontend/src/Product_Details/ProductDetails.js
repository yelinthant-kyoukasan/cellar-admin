import React from 'react'
import './ProductDetails.css'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

function ProductDetails({ id, title, desc, rating, price, weight, imageURL, quantity, createdDate, updatedDate }) {
  return (
    <div className="product-container">
        <div className="product-img">
            <img src={imageURL} alt="" />
        </div>  
        <div className="product-details">
            <div className="product-title">
                <h3>{title}</h3>
            </div>
            <div className="rating">
                {Array(rating).fill().map((_, index) => (
                    <StarBorderRoundedIcon className='rating-stars' key={index}/>
                )) }
            </div>
            <div className="quantity">
                <p>In Stock - <span className='quantity-num'>{quantity}</span> items available</p>
            </div>
            <div className="desc">
                <ul>
                    <span className="desc-title">Description</span> 
                    <li className="desc-desc">
                        {desc}                    
                    </li>    
                </ul>
            </div>
            <div className="weight">
                <p>Weight - <span className='weight-num'>{weight}</span> kg</p>
            </div>
            <div className="price">
                <p><span>$</span> {price}</p>
            </div>
            <div className="dateandtime">
                <p>Created At: <span>{createdDate}</span></p>
                <p>Last Updated At: <span>{updatedDate}</span></p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails