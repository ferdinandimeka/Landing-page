import React from 'react'
import '../Styles/Services.css'

const Services = (props) => {
  return (
    <div id='services' className='text-center'>
        <div className="container">
            <div className="section-title">
                <h2>Our Services</h2>
                <p>
                    Whether you're an individual or a business, our service is 
                    tailored to meet your unique requirements and deliver exceptional
                    results.
                </p>
            </div>

        <div className="row">
            {props.data ? props.data.map((item, idx) => (
                <div key={`${item.name}-${idx}`} className="col-md-4">
                    {" "}
                    <i className={item.icon}></i>
                    <div className="service-description">
                        <h3>{item.name}</h3>
                        <p>{item.title}</p>
                    </div>
                </div>
            )) : "loading..."}
        </div>

        </div>
    </div>
  )
}

export default Services