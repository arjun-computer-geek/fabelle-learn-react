import React, { useState } from 'react'
import { Rating } from '@mui/material'
import './cardDetails.css'
import { CourseContentList } from 'components/course/CourseContentList'
import { Review } from 'components/review/Review'
import { useCart } from 'context/cartContext'

export const CardDetails = ({ product }) => {
  const { addToCart } = useCart()
  const classToggler = (e) => {
    let panel = e.target.nextElementSibling

    e.target.classList.toggle("active")

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    if (e.target.firstChild.classList.contains('fa-angle-down')) {
      e.target.firstChild.classList.remove('fa-angle-down');
      e.target.firstChild.classList.add('fa-angle-up');
    }
    else {
      e.target.firstChild.classList.remove('fa-angle-up');
      e.target.firstChild.classList.add('fa-angle-down');
    }

  }
  return (
    <main className="container">
      <div className='card-details-container'>
        <div className='card-details-left-container'>
          <h1 className='bold-description'>{product?.name}</h1>
          <h2 className='sub-bold-description'>{product?.description}</h2>
          <div className="product-ratings">
            <Rating name="half-rating-read" defaultValue={0} value={product?.ratings} precision={0.5} readOnly />
            <span>({product?.numOfReviews}) {651000} students</span>
          </div>
          <div className='instructor'>Created by <a href="#">{product?.owner}</a></div>
          <div className='bottom-info-ribbon'>
            <i className="fa fa-info-circle" aria-hidden="true"></i><span>{product?.createdAT}</span>
            <i className="fa fa-globe" aria-hidden="true"></i><span>English</span>
            <i className="fa fa-cc" aria-hidden="true"></i><span>English [Auto]</span>
          </div>
        </div>
        <div className='card-details-right-container'>
          <div className='product-detail-card'>
            <div className='course-preview'>
              <img src={`https://fabelle-learn-react.herokuapp.com/public/uploads/${product?.image}`} alt='course-image' />
              <button onClick={classToggler} className='play-btn'>
                <img src="/images/product-details/play-icon.png" />
                <p>Preview this course</p>
              </button>
            </div>
            <div className='product-content'>
              <h2 className='product-price'>&#8377;{product?.price}</h2>
              <span className='product-discounted-price'><s>&#8377;{3536}</s> 87 % off</span>
              <button onClick={() => addToCart(product?._id)} className='btn add-to-cart' >Add to cart</button>
              <button onClick={classToggler} className='btn buy-now'>Buy now</button>
            </div>
          </div>
        </div>
      </div>

      {/* check list */}
      <div className='bordered-container'>
        <h2>What you'll learn</h2>
        <ul className='check-list-row'>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
          <li className='check-list-column'>Become an advanced, confident, and modern JavaScript developer from scratch</li>
        </ul>
      </div>

      {/* course content */}
      <div className='course-container'>
        <h2>Course content</h2>
        <div className='course-content'>
          <button onClick={classToggler} className="accordion">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            Welcome, Welcome, Welcome!
            <span className='no-of-lecture'>5 lectures. 23min</span>
          </button>
          <div className="panel">
            <div className='panel-container'>
              <CourseContentList type={"video"} text={"Course Structure and Projects"} time={"05:25"} />
              <CourseContentList type={"document"} text={"Read Before You Start"} time={"00:40"} />
            </div>
          </div>
          <button onClick={classToggler} className="accordion">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            JavaScript Fundamentals - Part1
            <span className='no-of-lecture'>15 lectures. 40min</span>
          </button>
          <div className="panel">
            <div className='panel-container'>
              <CourseContentList type={"video"} text={"Course Structure and Projects"} time={"05:25"} />
              <CourseContentList type={"document"} text={"Read Before You Start"} time={"00:40"} />
            </div>
          </div>
          <button onClick={classToggler} className="accordion">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            JavaScript Fundamentals - Part2
            <span className='no-of-lecture'>10 lectures. 80min</span>
          </button>
          <div className="panel">
            <div className='panel-container'>
              <CourseContentList type={"video"} text={"Course Structure and Projects"} time={"05:25"} />
              <CourseContentList type={"document"} text={"Read Before You Start"} time={"00:40"} />
            </div>
          </div>
        </div>
      </div>
      <div className='course-container'>
        <h2><u>Student Feedback</u></h2>
        <h3>Reviews</h3>
        <Review />
      </div>
    </main>
  )
}
