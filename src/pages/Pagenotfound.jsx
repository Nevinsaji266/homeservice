import React from 'react'

function Pagenotfound() {
  return (
    <>
       <Header />
            <div className='container-fluid mt-5'>
                <h1 className='text-center '>Cleaning service</h1>
                <div className='row'>

                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <div className="row mt-5 mb-5 d-flex justify-content-center">
                            <div className="col-md-4">
                                <Link to={'/register'} style={{ textDecoration: "none" }}>
                                    <Card
                                        imgSrc="https://images.unsplash.com/photo-1554995207-c18c203602cb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                                        title="Home cleaning(deep cleaning ,regular cleaning)"
                                        className="w-100"
                                    />
                                </Link>
                                <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
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
                                </div>
                            </div>

                            <div className="col-md-4">
                                <Link to={'/register'} style={{ textDecoration: "none" }}>
                                    <Card
                                        imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/1c/1a/80/2a/sofa-curtain-mattress.jpg"
                                        title="Carpet and upholstery cleaning"
                                    />
                                </Link>
                                <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
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
                                </div>
                            </div>

                            <div className="col-md-4">
                                <Link to={'/register'} style={{ textDecoration: "none" }}>
                                    <Card
                                        imgSrc="https://www.aquacleanwindowcleaning.co.uk/wp-content/uploads/2016/03/professional-window-cleaning-Leek.jpg"
                                        title="Window cleaning"
                                        className="w-100"
                                    />
                                </Link>
                                <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
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
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='col-md-1'></div>

                </div>
            </div>

      
    </>
  )
}

export default Pagenotfound
