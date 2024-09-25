import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import Config from '../Config';



export default function Feedback() {
  const apiUrl=Config.apiUrl;
  const [name,setName]=useState();  
  const [mob_no,setMob_no]=useState();
  const [description,setDescription]=useState();
  const addData = async (e) => {
    e.preventDefault();
  
    // Capitalize the first letter and letter after each space
    const capitalize = (str) => {
      return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };
  
    let item = {
       name,
     mob_no,
    description
    };
    
    try {
      let result = await fetch(`${apiUrl}/add_feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
  
      if (result.ok) {
        alert("Register Successfully");
        window.location.reload();
        // Clear the fields by resetting the state variables
        setName("");
        setMob_no("");
        setDescription("");
        
      } else {
        // Handle error case
        alert("Failed to add Products.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save record.");
    }
  };
  return (
    <div>
      <Navbar/>
       <div classname="carousel" style={{ backgroundImage: "url(/img/carousel-1.jpg)  ", height:'550px'}}>
       
    <div className="booking">
    <div className="container"  >
    
      <div className="row align-items-center " >
     
        <div className="col-lg-5 " style={{marginLeft:'350px', marginTop:'50px'}} >
        
        
          <div className="booking-form"  >
         
            <form >
            <h1 style={{fontFamily: "Times New Roman",color:"white"}}>Feedback</h1>
              
         
              <div className="control-group">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    pattern="^[a-zA-Z-' ]+$"
                    title="Only letters, spaces, hyphens, and apostrophes are allowed"
                    required="required"
                    onChange={(e)=>{setName(e.target.value)}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <i className="far fa-user" />
                    </div>
                  </div>
                </div>
              </div>
              
              
              <div className="control-group">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                    
                    title="Please enter a 10-digit mobile number"
                    required="required"
                    onChange={(e)=>{setMob_no(e.target.value)}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <i className="fa fa-mobile-alt" />
                    </div>
                  </div>
                </div>
              </div>
              

              <div className="control-group">
                <div className="input-group">
                  <textarea className="form-control"  required="required"  onChange={(e)=>{setDescription(e.target.value)}}>Discription </textarea>
                  <div className="input-group-append">
                    <div className="input-group-text">
                   
                    </div>
                  </div>
                </div>
              </div>
              
              
              
              <div className="button-container">
      <button className="btn custom-btn" type="submit" onClick={addData}>
        submit
      </button>
      
    </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}
