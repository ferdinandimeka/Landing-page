import React from 'react'

function Images({ name, title, image }) {
  return (
    <div className='product-item'>
        <div className='hover-bg'>
            {" "}
            <a href={image} title={name} data-lightbox-gallery="product1">
                <div className='hover-text'>
                    <h6>{title}</h6>
                </div>
                <img src={image} className='img-responsive' alt={name} />{" "}
            </a>{" "}
        </div>
    </div>
  )
}

export default Images