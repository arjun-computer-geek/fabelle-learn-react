import React from 'react'
import './review.css'
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
        </div>
    )
}
