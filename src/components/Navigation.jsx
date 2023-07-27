import React from 'react'
import '../Styles/Navigation.css'

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className='container'>
            <div className='navbar-header'>
                <button
                    type='button'
                    data-toggle='collapse'
                    className='navbar-toggle collapsed'
                    data-target="#bs-example-navbar-collapse-1"
                >
                    {" "}
                    <span className="sr-only">Toggle navigation</span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                </button>

                <a className="navbar-brand page-scroll" href="#page-top">
                    LunaBay
                </a>{" "}
            </div>
            

            {/* <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav 
                    className='justify-content-center flex-grow-1 pe-3'
                >
                    <Nav.Link className='page-scroll' href='#features'>FEATURES</Nav.Link>
                    <Nav.Link className='page-scroll' href='#products'>PRODUCTS</Nav.Link>
                    <Nav.Link className='page-scroll' href='#contact'>CONTACT</Nav.Link>
                    <Nav.Link className='page-scroll' href='#service'>SERVICES</Nav.Link>
                    <Nav.Link className='page-scroll' href='#aboutUs'>ABOUT US</Nav.Link>

                </Nav>
            </Navbar.Collapse> */}

            <div
                className='collapse navbar-collapse'
                id='bs-example-navbar-collapse-1'
            >
                <ul className='nav navbar-nav navbar-right'>
                    <li>
                        <a href='#features' className='page-scroll'>
                            Features
                        </a>
                    </li>

                    <li>
                        <a href='#products' className='page-scroll'>
                            Products
                        </a>
                    </li>

                    <li>
                        <a href='#services' className='page-scroll'>
                            Services
                        </a>
                    </li>

                    <li>
                        <a href='#aboutus' className='page-scroll'>
                            About
                        </a>
                    </li>

                    <li>
                        <a href='#contact' className='page-scroll'>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
