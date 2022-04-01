import React from "react";

export const WishlistCard = () => {
  return (
    <div className="card card-dismiss">
      <span className="btn-dismiss" >
        <i className="fa fa-times" aria-hidden="true"></i>
      </span>
      <img loading="lazy" src="./images/homepage/webdev.png" alt="product" />
      <div className="card-container">
        <h4 className="product-name">
          The complete 2022 Fullstack Web Developer Course
        </h4>
        <h3 className="product-owner">course by</h3>
        <div className="product-ratings">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-empty"></i>
          <i className="fa fa-star-o"></i>
          <span>(4,352)</span>
        </div>
        <div className="product-price">
          &#8377;<span>199</span>
        </div>
        <button className="btn product-add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};
