import React from 'react'

export const CardCategory = ({img, category}) => {
    return (
        <a href="#" className="card-container">
            <div className="img-wrapper">
                <img loading="lazy" src={img} alt="Developement" />
            </div>
            <span>{category}</span>
        </a>
    )
}