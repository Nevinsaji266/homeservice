import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


function Auth() {
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
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mt-5">
        <div className="col-3 mt-5"></div>
          <div className="col-6 mt-5">
            <h1 className="text-center" style={{ fontSize: '50px' }}>
             Register
            </h1>
         <div className='row mt-5'>
          <div className='col-md-6 mt-3'>
          <div>
                <label  style={styles.label}>
                  First Name (required):
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  style={styles.input}
                  required
                />
              </div>
          </div>
          <div className='col-md-6 mt-3'>
          <div>
                <label  style={styles.label}>
                  Last Name (required):
                </label>
                <input
                  type="text"
                 
                  style={styles.input}
                  required
                />
              </div>
          </div>
         </div>
            
             
              <div>
                <label  style={styles.label}>
                  Email Address (required):
                </label>
                <input
                  type="email"
                  
                  style={styles.input}
                  required
                />
              </div>
              <div>
                <label style={styles.label}>
                  Phone Number (required):
                </label>
                <input
                  type="text"
                 
                  style={styles.input}
                  required
                />
           
            </div>

            <div>
                <label  style={styles.label}>
                 Password (required):
                </label>
                <input
                  type="text"
                  style={styles.input}
                  required
                />
           
            </div>
            <p className='text'>Already Register ?   <Link to={'/login'} style={{color:"#B7410E"}}>Login</Link></p>
            <div className='d-flex justify-content-center align-items-center mt-3 mb-3'><button className='p-2 px-5 rounded' style={{fontSize:"20px",backgroundColor:"white",fontWeight:"600",color:"black",transition:"0.3s",cursor:"pointer"}} onMouseEnter={(e) => {e.target.style.backgroundColor = "black"; e.target.style.color = "white";}} onMouseLeave={(e) => {e.target.style.backgroundColor = "white"; e.target.style.color = "black";}}>Submit</button></div>

            <img
                            src="/public/clean+space.jpg"
                            alt="HomeMate Service"
                            className="w-100 mb-2"
                            style={{ height: 'auto', maxHeight: '720px'  , borderRadius: '20px' }}
                        />

          </div>
          <div className="col-3 mt-5"></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row mt-5">
        <div className="col-3 mt-5"></div>
          <div className="col-6 mt-5">
            <h1 className="text-center" style={{ fontSize: '50px' }}>
           Login
            </h1>
      
            
             
              <div>
                <label  style={styles.label}>
                  Email Address (required):
                </label>
                <input
                  type="email"
                  
                  style={styles.input}
                  required
                />
              </div>
             
            <div>
                <label  style={styles.label}>
                 Password (required):
                </label>
                <input
                  type="text"
                  style={styles.input}
                  required
                />
           
            </div>
            <p className='text'>Already Login ?   <Link to={'/register'} style={{color:"#B7410E"}}>Register</Link></p>
            <div className='d-flex justify-content-center align-items-center mt-3 mb-3'><button className='p-2 px-5 rounded' style={{fontSize:"20px",backgroundColor:"white",fontWeight:"600",color:"black",transition:"0.3s",cursor:"pointer"}} onMouseEnter={(e) => {e.target.style.backgroundColor = "black"; e.target.style.color = "white";}} onMouseLeave={(e) => {e.target.style.backgroundColor = "white"; e.target.style.color = "black";}}>Submit</button></div>

            <img
                            src="/public/clean+space.jpg"
                            alt="HomeMate Service"
                            className="w-100 mb-2"
                            style={{ height: 'auto', maxHeight: '720px' , borderRadius: '20px' }}
                        />

          </div>
          <div className="col-3 mt-5"></div>
        </div>
      </div>
    </>
  );
}

export default Auth;
