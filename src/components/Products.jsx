import React from 'react'
import Images from "./Images"
import '../Styles/Product.css'

function Products(props) {
  return (
    <div id='products' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Products</h2>
          <p>
            Shop now and enjoy exclusive discounts.
          </p>
        </div>
        <div className='row'>
          <div className='product-item'>
            {props.data ? props.data.map((item, idx) => (
              <div 
                key={`${item.name}-${idx}`}
                className='col-sm-6 col-md-4 col-lg-4'
              >
                <Images
                  title={item.title} 
                  image={item.image} 
                  name={item.name} 
                />
              </div>
            )) : 'loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products