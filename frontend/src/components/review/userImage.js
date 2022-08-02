import React from 'react'
import './review.css'
export const UserImage = ({img, text}) => {
  return (
    <>
    {img ? <img src={img} alt="user-profile" /> : <div className='user-img'>{text}</div>}
    </>
  )
}
