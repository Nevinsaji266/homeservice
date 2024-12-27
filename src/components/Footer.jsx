import { faFacebook, faGithub, faInstagram, faLinkedin, faStackOverflow, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            {/* <div className='container-fluid  ' style={{ backgroundColor: '#4D5656' }} >


                <div className='row w-100 p-4'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>

                        <h1 className='text-center text-light'>HomeMate</h1>

                    </div>

                    <div className='col-md-1'></div>
                </div>
                <div className=' row w-100 p-md-5 p-4 '>
                    <div className="col-md-2 text-white mt-5"></div>
                    <div className="col-md-4 text-white mt-5">
                        <h5 className='mb-4'>Contact Us</h5>
                        <div className='d-flex '>
                            <input type="text" className='form-control me-2 text-dark' placeholder='Email-id' style={{ backgroundColor: "white", color: "black" }} />
                            <button className='btn btn-light' style={{ color: "#939E6B" }}>Subscribe </button>
                        </div>
                        <div className='d-flex justify-content-between mt-3 fa-2x'>
                            <FontAwesomeIcon icon={faXTwitter} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>





                    </div>
                    <div className="col-md-1 p-1  ms-3" style={{ width: "1px", backgroundColor: "#939E6B" }}></div>
                    <div className="col-md-5  ">
                        <div className='ms-md-5'>

                            <Link to={'/'} className='text-decoration-none text-white' >    <p style={{ fontSize: "35px" }}>Home</p></Link>
                            <Link to={'/projects'} className='text-decoration-none text-white' >  <p style={{ fontSize: "35px" }}>Services</p></Link>
                            <Link to={'/dashboard'} className='text-decoration-none text-white' >  <p style={{ fontSize: "35px" }}>About us</p></Link>
                            <button
                                className="btn btn-light w-25 rounded px-3 py-1  me-2"
                                style={{
                                    backgroundColor: "white",
                                    color: "#939E6B",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Login
                            </button>
                            <br></br>
                            <button
                                className="btn btn-light w-25 rounded px-3 py-1  mt-4"
                                style={{
                                    backgroundColor: "white",
                                    color: "#939E6B",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Register
                            </button>
                        </div>




                    </div>

                </div>

                <div
                    className="d-flex justify-content-center align-items-center"
                // Set the height of the container
                >
                    <div
                        style={{
                            width: "900px", // Adjust the line width
                            height: "7.5px", // Adjust the line height
                            backgroundColor: "#939E6B",
                        }}
                    ></div>


                </div>

            </div> */}

            <div className='container-fluid py-5' style={{ backgroundColor: '#4D5656', minHeight: '50vh' }}>
                <div className='row w-100 p-md-5 p-4'>
                    {/* Left Section */}
                    <div className="col-md-5 text-white">
                        <div className='d-flex fs-5'>

                            <h3 className='mb-4'>HomeMate</h3>
                        </div>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sapiente aliquam temporibus doloremque eos illo dolorum rem. Libero dignissimos accusantium minus magnam error, obcaecati nulla sint modi quae totam placeat!
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Enhance your projects with innovative solutions. We deliver excellence in every step of the process, ensuring top-notch quality and performance for all our clients.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            Enhance your projects with innovative solutions. We deliver excellence in every step of the process, ensuring top-notch quality and performance for all our clients.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="col-md-1 p-1 ms-3" style={{ width: "1px", backgroundColor: "#939E6B" }}></div>

                    {/* Middle Section (Links & Buttons) */}
                    <div className="col-md-2">
                        <div className='ms-md-5'>
                            <Link to={'/'} className='text-decoration-none text-white '>
                                <p style={{ fontSize: "25px" }}>Home</p>
                            </Link>
                            <Link to={'/login'} className='text-decoration-none text-white'>
                                <p  className="" style={{ fontSize: "25px" }}>Services</p>
                            </Link>
                            <Link to={'/aboutus'} className='text-decoration-none text-white'>
                                <p style={{ fontSize: "25px" }}>About Us</p>
                            </Link>
                            <button
                                className="btn btn-light w-100 rounded px-3 py-1 mt-2"
                                style={{
                                    backgroundColor: "white",
                                    color: "#939E6B",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Login
                            </button>
                            <button
                                className="btn btn-light w-100 rounded px-3 py-1 mt-4"
                                style={{
                                    backgroundColor: "white",
                                    color: "#939E6B",
                                    fontSize: "0.9rem",
                                }}
                            >
                                Register
                            </button>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="col-md-1 p-1 ms-3" style={{ width: "1px", backgroundColor: "#939E6B" }}></div>

                    {/* Right Section (Contact Form) */}
                    <div className="col-md-3 p-md-5 p-4 text-white ms-5">
                        <h5>Contact Us</h5>
                        <div className='d-flex'>
                            <input type="text" className='form-control me-2 w-100' placeholder='Email ID' />
                            <button className='btn btn-warning'>Subscribe</button>
                        </div>
                        <div className='d-flex justify-content-between mt-3 fa-2x'>
                            <FontAwesomeIcon icon={faXTwitter} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <p className="mt-3" style={{ fontSize: "0.9rem" }}>
                            Stay connected with us through our social media channels for the latest updates, events, and news about Project Fair.
                        </p>
                    </div>
                </div>

            </div>




        </>
    )
}

export default Footer
