import React from 'react';


function Header() {
  return (
    <>
     <div
  style={{
    backgroundColor: "white",
    border: "none",
    boxShadow: "none",
  }}
  className="py-2 row align-items-center"
>
  <div className="col-md-2 " >
    <h1 className="ms-5" style={{ color: "black", fontWeight: "bold" }}>
      HomeMate
    </h1>
  </div>

  <div className="col-md-4"></div>

  <div className="col-md-6">
    <div className="d-flex justify-content-end align-items-center">
      <h6
        className="ms-5 me-5 fw-bold"
        style={{ fontWeight: "500", margin: "0 10px", color: "black" }}
      >
        Home
      </h6>
      <h6
        className="ms-5 me-5 fw-bold"
        style={{ fontWeight: "500", margin: "0 10px", color: "black" }}
      >
        Services
      </h6>
      <h6
        className="ms-5 me-5 fw-bold"
        style={{ fontWeight: "500", margin: "0 10px", color: "black" }}
      >
        About Us
      </h6>

      <button
        className="btn btn-light rounded px-3 py-1 ms-2 me-2"
        style={{
          backgroundColor: "#B7410E",
          color: "white",
          fontSize: "0.9rem",
        }}
      >
        Login
      </button>

      <button
        className="btn btn-light rounded px-3 py-1 ms-2"
        style={{
          backgroundColor: "#B7410E",
          color: "white",
          fontSize: "0.9rem",
        }}
      >
        Register
      </button>
    </div>
  </div>
</div>

    </>
  );
}

export default Header;
