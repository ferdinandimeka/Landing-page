import React from 'react'
import '../Styles/About.css'
import img from '../img/About.jpg'

const About = (props) => {
  return (
    <div id='about'>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    {" "}
                    <img src={img} className='img-responsive' alt='' />{" "}
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="about-text">
                        <h2>About Us</h2>
                        <p>{props.data ? props.data.Paragraph : "loading..."}</p>
                        <h3>Why Choose Us</h3>

                        <div className="list-style">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                    {props.data ? props.data.Reason1.map((item, idx) => (
                                        <li key={`${item}-${idx}`}>
                                            {item}
                                        </li>
                                    )) : "loading..."}
                                </ul>
                            </div>

                            <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                    {props.data ? props.data.Reason2.map((item, idx) => (
                                        <li key={`${item}-${idx}`}>
                                            {item}
                                        </li>
                                    )) : "loading..."}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About