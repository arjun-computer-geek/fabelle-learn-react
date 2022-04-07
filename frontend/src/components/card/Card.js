import { Rating } from '@mui/material'
import { useCart } from 'context/cartContext'
import { useWishlist } from 'context/wishlistContext'
import React from 'react'

export const Card = ({id, img,productName, productOwner, noOfReviews, price, ratings}) => {
    const {addToCart} = useCart()
    const {addToWishlist} = useWishlist()
    
    return (
        <div className="card">
            <img loading="lazy" src={img} alt="product" />
            <div className="card-container">
                <h4 className="product-name">{productName}</h4>
                <h3 className="product-owner">{productOwner}</h3>
                <div className="product-ratings">
                    <Rating name="half-rating-read" defaultValue={0} value={ratings} precision={0.5} readOnly />
                    <span>({noOfReviews})</span>
                </div>
                <div className="product-price">&#8377;<span>{price <= 0? "Free": price}</span></div>
                <button className="btn product-add-to-cart-btn"onClick={() => addToCart(id)}>Add to cart</button>
                <button className="product-wish-btn" onClick={() => addToWishlist(id) }>
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>
    )
}
