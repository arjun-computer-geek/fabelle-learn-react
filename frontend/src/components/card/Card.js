import { useCart } from 'context/cartContex'
import React from 'react'

export const Card = ({id, img,productName, productOwner, noOfReviews, price}) => {
    const {addToCart} = useCart()
    return (
        <div className="card">
            <img loading="lazy" src={img} alt="product" />
            <div className="card-container">
                <h4 className="product-name">{productName}</h4>
                <h3 className="product-owner">{productOwner}</h3>
                <div className="product-ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-empty"></i>
                    <i className="fa fa-star-o"></i>
                    <span>({noOfReviews})</span>
                </div>
                <div className="product-price">&#8377;<span>{price}</span></div>
                <button className="btn product-add-to-cart-btn"onClick={() => addToCart(id)}>Add to cart</button>
                <button className="product-wish-btn" >
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        </div>
    )
}
