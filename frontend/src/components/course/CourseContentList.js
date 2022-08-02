import React from 'react'
import './courseContentList.css'
export const CourseContentList = ({ type, text, time }) => {
    return (
        <div className='course-content-list'>
            {type == "video" ? 
            <i class="fa fa-play-circle" aria-hidden="true"></i> 
            : type =="document" && 
            <i class="fa fa-file-o" aria-hidden="true"></i>}
            <a href='#'>{text}</a>
            <span className='course-video-duration'>{time}</span>
        </div>
    )
}
