import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import '../Styles/Contact.css'

const initialState = {
    name: "",
    email: "",
    message: "",
}

const Contact = (props) => {

    const [{ name, email, message }, setState] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }))
    }

    const clearState = () => setState({ ...initialState });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, message)
        emailjs
        .sendForm("SG1234567890", "d-0123456789abcdef0123456789abcdef", event.target, "user123abc")
        .then((result) => {
            console.log(result.text)
            clearState()
        }, (error) => {
            console.log(error.text)
        })
    }

  return (
    <div>
        <div id="contact">
            <div className="container">
                <div className="col-md-8">
                    <div className="row">
                        <div className="section-title">
                            <h2>Get In Touch</h2>
                            <p>
                            Be the first to know! Subscribe to our exclusive email 
                            list and stay up-to-date with the latest trends, promotions,
                            and product launches. Join our community of savvy shoppers and
                            unlock a world of benefits.
                            </p>
                        </div>

                        <form name='sentmessage' validate onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id='name'
                                            type='text'
                                            className='form-control'
                                            placeholder='Name'
                                            name='name'
                                            required
                                            onChange={handleChange} 
                                        />
                                        <p className='help-block text-danger'></p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input 
                                            id='email'
                                            type='email'
                                            className='form-control'
                                            placeholder='Email'
                                            name='email'
                                            required
                                            onChange={handleChange}
                                        />
                                        <p className='help-block text-danger'></p>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea 
                                    id='message'
                                    name='message'
                                    rows="4"
                                    className='form-control'
                                    placeholder='Message'
                                    required
                                    onChange={handleChange}
                                ></textarea>
                                <p className='help-block text-danger'></p>
                            </div>

                            <div id="success"></div>
                            <button type='submit' className='btn btn-custom btn-lg'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-md-3 col-md-offset-1 contact-info">
                    <div className="contact-item">
                        <h3>Contact-info</h3>
                        <p>
                            <span>
                                <i className='fa-solid fa-location-dot'></i>
                                Address
                            </span>
                            {props.data ? props.data.address : "loading..."}
                        </p>
                    </div>

                    <div className="contact-item">
                        <p>
                            <span>
                                <i className='fa-solid fa-phone'></i>
                                Phone
                            </span>
                            {props.data ? props.data.phone : "loading..."}
                        </p>
                    </div>

                    <div className="contact-item">
                        <p>
                            <span>
                                <i className='fa-solid fa-envelope'></i>
                                Email
                            </span>
                            {props.data ? props.data.email : "loading..."}
                        </p>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="row">
                        <div className="social">
                            <ul>
                                <li>
                                    <a href={props.data ? props.data.facebook : '/'}>
                                        <i className='fa-brands fa-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={props.data ? props.data.twitter: '/'}>
                                        <i className='fa-brands fa-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={props.data ? props.data.youtube : '/'}>
                                        <i className='fa-brands fa-youtube'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="footer">
            <div className="container text-center">
                <p>
                    &copy; 2023 Imeka Ferdinand Landing page. Design by {" "}
                    <a href='https://github.com/ferdinandimeka/' rel='nofollow'>
                        ImekaFerdy
                    </a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Contact