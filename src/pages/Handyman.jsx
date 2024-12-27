import React, { useState } from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Card = ({ imgSrc, title }) => {
    const [hover, setHover] = useState(false);

    const cardStyle = {
        position: "relative",
        // width: "490px",
        height: "380px",
        margin: "10px",
        borderRadius: "15px",
       border: "2px solid black",
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
function Handyman() {
  return (
    <>
       <Header />
            <div className='container-fluid mt-5'>
                <h1 className='text-center '>Handyman service</h1>
                <div className='row'>

                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div className="row mt-5 mb-5 d-flex justify-content-center">
                            <div className="col-md-4">
                                <Link to={'/Booking'} style={{ textDecoration: "none" }}>
                                    <Card
                                        imgSrc="https://m.media-amazon.com/images/I/61q8Ififz5L.jpg"
                                        title="Painting and wallpaper installation"
                                        className="w-100"
                                    />
                                </Link>
                                <Link to={'/Booking'} style={{ textDecoration: "none" }}><div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
                                    <button
                                        className='p-2 px-5 rounded'
                                        style={{
                                            fontSize: "20px",
                                            backgroundColor: "white",
                                            fontWeight: "600",
                                            color: "black",
                                            transition: "0.3s",
                                            cursor: "pointer"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "black";
                                            e.target.style.color = "white";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "white";
                                            e.target.style.color = "black";
                                        }}
                                    >
                                        Book Now
                                    </button>
                                </div></Link>
                            </div>

                            <div className="col-md-4">
                                <Link to={'/Booking'} style={{ textDecoration: "none" }}>
                                    <Card
                                        imgSrc="https://media.istockphoto.com/id/1067496776/photo/top-view-of-drill-tool-and-another-equipment-on-wood-table-furniture-assembly-improvement-or.jpg?s=612x612&w=0&k=20&c=pW5vu2TK9yaOvqLG8jktB59DRIvVdr6eAVnI72RwPPI="
                                        title="Furniture Assembly"
                                    />
                                </Link>
                                <Link to={'/Booking'} style={{ textDecoration: "none" }}><div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
                                    <button
                                        className='p-2 px-5 rounded'
                                        style={{
                                            fontSize: "20px",
                                            backgroundColor: "white",
                                            fontWeight: "600",
                                            color: "black",
                                            transition: "0.3s",
                                            cursor: "pointer"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "black";
                                            e.target.style.color = "white";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "white";
                                            e.target.style.color = "black";
                                        }}
                                    >
                                        Book Now
                                    </button>
                                </div></Link>
                            </div>

                            <div className="col-md-4">
                            <Link to={'/Booking'} style={{ textDecoration: "none" }}>
                                    <Card
                                        imgSrc="https://www.newenglandhomerepairs.com/wp-content/uploads/2021/08/man-maintenance.jpg"
                                        title="Minor home repairs"
                                    />
                                </Link>
                                <Link to={'/Booking'} style={{ textDecoration: "none" }}><div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
                                    <button
                                        className='p-2 px-5 rounded'
                                        style={{
                                            fontSize: "20px",
                                            backgroundColor: "white",
                                            fontWeight: "600",
                                            color: "black",
                                            transition: "0.3s",
                                            cursor: "pointer"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "black";
                                            e.target.style.color = "white";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "white";
                                            e.target.style.color = "black";
                                        }}
                                    >
                                        Book Now
                                    </button>
                                </div></Link>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-1'></div>

                </div>
            </div>
    
    </>
      
    
  )
}

export default Handyman
