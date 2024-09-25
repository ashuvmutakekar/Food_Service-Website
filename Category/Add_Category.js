import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'

import { useState } from 'react';
import Config from '../../Config';
export default function Add_Category() {
  const apiUrl=Config.apiUrl;
  const [category,setCategory]=useState();
  const [description,setDescription]=useState();
  const handleClike = async (e) => {
    e.preventDefault();
  
    let item = {
      category,
      description,
    };
 
    
 
    try {
      let result = await fetch(`${apiUrl}/Add_Category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
    
      if (result.ok) {
        alert("Category Added Successfully");
        window.location.reload();
        // Clear the fields by resetting the state variables
        setCategory("");
        setDescription("");
      
      } else {
        // Handle error case
        alert("Failed to add Category.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save record.");
    }

    
  };
  return (
    <div>
      
      <div className="container-scroller "  >
      <Header/>
      <Sidebar/>
  <div className="container-fluid page-body-wrapper"  >
 
    
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">ADD CATEGORY</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Forms</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {" "}
               add category{" "}
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
         
          <div className="col-12 grid-margin stretch-card" >
            <div className="card" >
              <div className="card-body"  style={{backgroundColor:" #80aaff"}}>
                <h4 className="card-title">ADD CATEGORY
                </h4>
               <br></br>
                <form>
                  <br/>
          <div className="row">
            <br/>
           
                
          <br/>
          <br/>
          <br/>
            
          <div className="col-lg-6 col-sm-6 col-12">
  <div className="control-group">
    <div className="input-group ">
      <select className="custom-select form-control" required onChange={(e)=>{setCategory(e.target.value)}}>
        <option value="" disabled selected>
          Select Catgory
        </option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Chinese">chinese</option>
       
        {/* Add more category options as needed */}
      </select>
    </div>
  </div>
</div>
<div className="col-lg-6 col-sm-6 col-12">
  <div className="control-group">
    <div className="input-group ">
    <textarea
                                  className="form-control"
                                  placeholder="Description"
                                  value={description}
                                  rows={4}
                                  required
                                  onChange={(e) => {
                                    setDescription(e.target.value);
                                  }}
                                >
                                  Desription
                                </textarea>
    </div>
  </div>
</div>
          
          
              
           

           
           <div >
           

           <div style={{marginLeft:"700px" }} >
                       
                     
                       <button className="btn btn-light me-2" type="submit" onClick={handleClike} style={{marginRight:"10px"}}>
       Submit
      </button>
      <button className="btn btn-dark" type="submit">
       Cancel
      </button>
      
    </div>
                      </div>
         
           
          
           
            
           
        </div>
        </form>
              </div>
            </div>
          </div>
          
          
        
          
          
          
          
          
        </div>
      </div>
      
    </div>
    {/* main-panel ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>

    </div>
  )
}