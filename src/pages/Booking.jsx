import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom';

function Booking() {

    const styles = {
        label: {
          display: 'block',
          marginBottom: '5px',
          fontWeight: 'bold',
        
        },
        input: {
          width: '100%',
          padding: '10px',
          height:"60px",
          border: '1px solid #ccc',
          marginBottom: '15px',
          borderRadius: '4px',
          boxSizing: 'border-box',
        },
      };
  return (
    <div>
      <Header/>

      <div className="container-fluid">
        <div className="row mt-5">
        <div className="col-3 mt-5"></div>
          <div className="col-6 mt-5">
            <h1 className="text-center" style={{ fontSize: '50px' }}>
          Booking Confirmation
            </h1>
        
            
             
              <div>
                <label  style={styles.label}>
                 Date
                </label>
                <input
                  type="email"
                  
                  style={styles.input}
                  required
                />
              </div>
              <div>
                <label style={styles.label}>
                Time
                </label>
                <input
                  type="text"
                 
                  style={styles.input}
                  required
                />
           
            </div>

            <div>
                <label  style={styles.label}>
                Problem
                </label>
                <input
                  type="text"
                  style={styles.input}
                  required
                />
           
            </div>
            <div>
            <label  style={styles.label}>
                Problem Description
                </label>
                <textarea name="" id=""   style={styles.input}
                  required ></textarea>
            </div>
          
            <div className='d-flex justify-content-center align-items-center mt-3 mb-3'><button className='p-2 px-5 rounded' style={{fontSize:"20px",backgroundColor:"white",fontWeight:"600",color:"black",transition:"0.3s",cursor:"pointer"}} onMouseEnter={(e) => {e.target.style.backgroundColor = "black"; e.target.style.color = "white";}} onMouseLeave={(e) => {e.target.style.backgroundColor = "white"; e.target.style.color = "black";}}>Submit</button></div>

            <img
                            src="https://images.squarespace-cdn.com/content/v1/618712634cc9d14bd80427f3/cb5923fb-4c9f-4b1c-82fd-8e6f90530c02/clean+office+building.jpg?format=1000w"
                            alt="HomeMate Service"
                            className="w-100 mb-3"
                            style={{ height: 'auto', maxHeight: '720px', borderRadius: '20px' }}
                        />

          </div>
          <div className="col-3 mt-5"></div>
        </div>
      </div>

    </div>
  )
}

export default Booking
