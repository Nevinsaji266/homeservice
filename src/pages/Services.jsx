import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Card = ({ imgSrc, title }) => {
    const [hover, setHover] = useState(false);

    const cardStyle = {
        position: "relative",
        // width: "490px",
        height: "290px",
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

function Services() {
  return (
    <>
    <Header/>
    <div className='container-fluid'>
        <div className='row mt-5'>
            <div className='col-md-1'></div>
            <div className='col-md-10 mt-5'>

                <h1 className='text-center'>Services available in HomeMate</h1>

                
          
                          
                       
                                <div className="row mt-5 mb-5 d-flex justify-content-center">

                                    <div className="col-md-3">     <Link to={'/clean'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/cleaning.jpg" title="Cleaning service" className="w-100 " /></Link></div>
                                    <div className="col-md-3">     <Link to={'/repairing'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/repandmain.jpg" title="Repairing and maintaince" /></Link></div>
                                    <div className="col-md-3">     <Link to={'/handyman'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/hand.webp" title="Handyman Services" className="w-100" /></Link></div>
                                    <div className="col-md-3">     <Link to={'/pest'} style={{ textDecoration: "none" }} >   <Card imgSrc="/public/pest.avif" title="Pest Control" /></Link></div>


                                </div>

                                <div className="row mt-5 mb-5 d-flex justify-content-center">

                                    <div className="col-md-3">     <Link to={'/garden'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/garden.jpg" title="Gardening and Landscaping" className="w-100 " /></Link></div>
                                    <div className="col-md-3">     <Link to={'/renovation'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/home.jpg" title="Home Renovation" /></Link></div>
                                    <div className="col-md-3">     <Link to={'/beauty'} style={{ textDecoration: "none" }}>   <Card imgSrc="/public/bauty.jpg" title="Beauty and personal care at home" className="w-100" /></Link></div>
                                    <div className="col-md-3">     <Link to={'/laundary'} style={{ textDecoration: "none" }} >   <Card imgSrc="/public/laun.webp" title="Laundary and Dry Cleaning" /></Link></div>


                                </div>
                          
            </div>
            <div className='col-md-1'></div>
        </div>

    </div>
      
    </>
  )
}

export default Services
