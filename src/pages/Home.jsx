import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, title }) => {
    const [hover, setHover] = useState(false);

    const cardStyle = {
        position: "relative",
        // width: "490px",
        height: "190px",
        margin: "10px",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#333",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
    };

    const firstContentStyle = {
        height: hover ? "0px" : "100%",
        width: "100%",
        transition: "all 0.4s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: hover ? 0 : 1,
        borderRadius: "15px",
    };

    const secondContentStyle = {
        height: hover ? "100%" : "0%",
        width: "100%",
        opacity: hover ? 1 : 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        transition: "all 0.4s",
        fontSize: hover ? "1.8rem" : "0px",
        fontFamily: "Poppins, sans-serif",
        color: "white",
        transform: hover ? "rotate(0deg)" : "rotate(90deg) scale(-1)",
        backgroundColor: "#555",
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div style={firstContentStyle}>
                <img
                    src={imgSrc}
                    alt={title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>
            <div style={secondContentStyle}>
                <span>{title}</span>
            </div>
        </div>
    );
};

function Home() {
    return (
        <>
            <Header />


            <div className="container-fluid">
                <div className="row align-items-center ">
                    <div className="col-md-1"></div>
                    <div className="col-md-6  ">
                        <h4
                            className="mb-4 text-center"
                            style={{
                                fontWeight: 'bold',
                                fontSize: '35px',
                                color: '#181817',
                            }}
                        >
                            Free up valuable time with
                        </h4>
                        <h1
                            className="mb-4 text-center"
                            style={{
                                fontWeight: 'bold',
                                color: '#181817',
                                fontSize: '45px',
                            }}
                        >
                            The Best Services in HomeMate
                        </h1>
                        <p
                            className="mb-4 text-center"
                            style={{
                                fontSize: '1.3rem',
                                lineHeight: '1.6',
                                fontWeight: '500',
                                color: '#000000',
                                fontStyle: 'italic',
                            }}
                        >
                            "Our skilled team provides efficient home services, from repairs to carpentry, ensuring affordable solutions and customer satisfaction."
                        </p>
                       
                    </div>
                    <div className="col-md-5 mt-5 text-center">
                        <img
                            src="/public/wor.png"
                            alt="HomeMate Service"
                            className="img-fluid"
                            style={{ height: 'auto', maxHeight: '720px' }}
                        />
                    </div>
                </div>
            </div>



            <div
                className="container-fluid"
                style={{ backgroundColor: "#E0E9EF", paddingBottom: "40px" }}
            >
                <div className="row p-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mt-5 mb-2">
                        <h4
                            className="text-center"
                            style={{ color: "#181817", fontStyle: "italic" }}
                        >
                            "Specializing in home services, including repairs, cleaning,... for
                            every place."
                        </h4>
                        <p className="mt-4 text-center">
                            "HomeFix is a locally owned, eco-friendly company providing
                            top-notch home repair and maintenance services in the world,
                            serving the community with care and reliability since 2015."
                        </p>
                        <div className="d-flex justify-content-center align-items-center">
                          <Link to={
                            '/about'}>  <button
                                className="p-1 rounded px-5 mt-4 mb-3"
                                style={{
                                    backgroundColor: "#474746",
                                    color: "white",
                                    borderBlockColor: "black",
                                }}
                            >
                                About Us
                            </button></Link>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>


            <div className="container-fluid " style={{ backgroundColor: "" }}>
                <div className="row mb-5">
                <h1 className=" mt-5 mb-3 text-center" style={{ color: "#000000", fontSize: '50px' }}>
                            What can we help you with?
                        </h1>
                        <h4 className="text-center mb-4" style={{ color: "#290000" }}>
                            Tell us what you need. We’ll handle the rest.
                        </h4>
                    <div className="col-md-1"></div>
                    <div className="col-md-10 mt-3">
                      
                        <div className="row">
                            <div className="col-md-4 mt-5"> <img
                                src="/public/prof.png"
                                alt="HomeMate Service"
                                className="img-fluid"
                                style={{ height: 'auto', maxHeight: '720px' }}
                            /></div>
                            <div className="col-md-8">
                            <div className="row mt-5 mb-5 d-flex justify-content-center">

<div className="col-md-3">     <Link to={'/register'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/cleaning.jpg" title="Cleaning service" className="w-100 " /></Link></div>
<div className="col-md-3">     <Link to={'/register'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/repandmain.jpg" title="Repairing and maintaince" /></Link></div>
<div className="col-md-3">     <Link to={'/register'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/hand.webp" title="Handyman Services" className="w-100" /></Link></div>
<div className="col-md-3">     <Link to={'/register'} style={{ textDecoration: "none" }} >   <Card imgSrc="/public/pest.avif" title="Pest Control" /></Link></div>


</div>

<div className="row mt-5 mb-5 d-flex justify-content-center">

<div className="col-md-3">     <Link to={'/register'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/garden.jpg" title="Gardening and Landscaping" className="w-100 " /></Link></div>
<div className="col-md-3">     <Link to={'/register'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/home.jpg" title="Home Renovation" /></Link></div>
<div className="col-md-3">     <Link to={'/register'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/bauty.jpg" title="Beauty and personal care at home" className="w-100" /></Link></div>
<div className="col-md-3">     <Link to={'/register'} style={{ textDecoration: "none" }} >   <Card imgSrc="/public/laun.webp" title="Laundary and Dry Cleaning" /></Link></div>


</div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>


            
<div className="container-fluid p-5" style={{ backgroundColor: "#D2B89F" }}>
            <div className="row  " style={{ backgroundColor: "" }}>
                <div className="col-md-4">
                    <Link to={'/register'} style={{ textDecoration: "none" }}>
                        <h6
                            className="w-100 rounded text-center"
                            style={{
                                color: "black",
                                fontSize: "30px",
                                
                                margin: 0, // Removes extra margin around <h6>
                                padding: 0, // Removes extra padding around <h6>
                                lineHeight: "1.2", // Adjusts spacing between lines if needed
                            }}
                        >
                            View all reviews <span style={{ fontSize: "25px" }}>→</span>
                        </h6>
                    </Link>
                </div>
              <div className="col-md-4">
  <Link to={'/register'} style={{ textDecoration: "none" }}>
    <h6
      className="w-100 rounded text-center"
      style={{
        color: "black",
        fontSize: "30px",
        margin: 0,
        padding: 0,
        lineHeight: "1.2",
      }}
    >
      View all services <span style={{ fontSize: "25px" }}>→</span>
    </h6>
  </Link>
  {/* Div under the text */}
 
</div>

                <div className="col-md-4">
                    <Link to={'/register'} style={{ textDecoration: "none" }}>
                        <h6
                            className="w-100 rounded text-center"
                            style={{
                                color: "black",
                                fontSize: "30px",
                           
                                margin: 0,
                                padding: 0,
                                lineHeight: "1.2",
                            }}
                        >
                            About us <span style={{ fontSize: "25px" }}>→</span>
                        </h6>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 ">
                <div className="d-flex justify-content-center align-items-center mt-2 w-50 mt-1" style={{
      width: "100%",  // Full width of the column
      height: "2.5px",
      backgroundColor: "#8F8368",
    }}></div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                <div className="d-flex justify-content-center align-items-center mt-2  mt-1" style={{
      width: "60%",  // Full width of the column
      height: "2.5px",
      backgroundColor: "#8F8368",
    }}></div>
                    
                </div>
                <div className="col-md-1"></div>

                <div className="col-md-3">
                <div className="d-flex justify-content-center align-items-center mt-2 w-50 mt-1" style={{
      width: "100%",  // Full width of the column
      height: ".5px",
      backgroundColor: "#8F8368",
    }}></div>
                </div>


            </div>
            </div>
          

        </>
    );
}

export default Home;
