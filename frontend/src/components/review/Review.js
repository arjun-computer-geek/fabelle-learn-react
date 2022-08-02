import React from 'react'
import './review.css'
import { UserImage } from './userImage'
import { Rating } from '@mui/material'

export const Review = () => {
    return (
        <div className='review-container'>
            <div className='review-search-bar'>
                <input placeholder='Search reviews' />
                <span>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </span>
            </div>
            <div className="sort-btn">
                <select name="" id="">
                    <option
                        value="all-ratings"
                    // onClick={(e) => sortByCategory(e.target.value)}
                    >
                        All ratings
                    </option>
                    <option
                        value="five-stars"
                    // onClick={(e) => sortByCategory(e.target.value)}
                    >
                        Five stars
                    </option>
                    <option
                        value="four-start"
                    // onClick={(e) => sortByCategory(e.target.value)}
                    >
                        Four stars
                    </option>
                    <option
                        value="three-start"
                    // onClick={(e) => sortByCategory(e.target.value)}
                    >
                        Three stars
                    </option>
                    <option
                        value="two-start"
                    // onClick={(e) => sortByCategory(e.target.value)}
                    >
                        Two stars
                    </option>
                    <option
                        value="one-start"
                    // onClick={(e) => sortByCategory(e.target.value)}
                    >
                        One stars
                    </option>
                </select>

            </div>
            <div className='user-review'>
                <UserImage text="RS" img={null} />

                <div className='user-review-data'>
                    <h4>{"Ramdan Agus S"}</h4>

                    <Rating name="half-rating-read" defaultValue={0} value={4.3} precision={0.5} readOnly />
                    
                    <p>One of the best courses I've ever taken on Udemy. Jonas is incredibly knowledgeable in JavaScript and every minute of this course taught me something new. Glad I chose this course and looking forward to enrolling in more of Jonas' courses!</p>
                </div>
            </div>
        </div>
    )
}
