import React from 'react'
import img from '../img/bg-img2.jpg'
import '../Styles/Image.css'
import '../Styles/header.css'

const Header = () => {
    return (
        <div className='image-container '>
            <img src={img} alt='' />

            <div className='text-overlay'>
                <h2>Shop Smarter</h2>
                <p>
                    Discover the Ultimate Shopping Experience, 
                    Shop now and enjoy exclusive discounts!
                </p>
                <a
                    href='https://lunabay.onrender.com'
                    className='btn btn-custom btn-lg page-scroll' 
                >
                    Shop Now!
                </a>
            </div>
        </div>
    )
}

export default Header