import React from 'react'
import Header from '../components/Header'

function Aboutus() {
    return (
        <>
            <Header />
            <div className="container-fluid mt-5">
  <div className="row mt-2">
    <div className="col-md-2"></div>
    <div className="col-md-8">
      <div className="row p-5 " >
        <div className="col-md-6 p-1">
          <img 
            src="/public/slider-img.png" 
            alt="About Us" 
            style={{height:'490px'}}
            className='w-100'
           
          />
        </div>
        <div className="col-md-6 px-5 py-3">
          <h1 className="text-center mb-3">About Us</h1>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nihil distinctio sunt ipsam! Repellat deleniti id nisi? 
            Eum natus labore dolores accusamus assumenda repellendus veritatis in omnis optio, officia ad? Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Laboriosam quibusdam minus tempore, saepe cum ducimus aspernatur libero tenetur 
            rerum dolorem iste ea accusantium maxime soluta. Similique quidem minus temporibus adipisci? Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Tenetur temporibus molestiae voluptates, expedita inventore similique dolore, 
            perferendis fuga ex harum molestias amet corporis doloremque illum repudiandae laudantium consequatu.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-2"></div>
  </div>
</div>


        </>
    )
}

export default Aboutus
