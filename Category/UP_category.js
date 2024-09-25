import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import axios from 'axios'

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import Config from '../../Config';

export default function UP_category() {

  const location = useLocation();
  const searchparam = useParams();
 
  const apiUrl = Config.apiUrl;
    const [category,setCategory]=useState();
    
    const [description,setDescription]=useState();
   const[c_id,setC_id]=useState();
  const [register,setRegister]=useState([]);



  useEffect((c_id) => {
    const fetchAllData = async () => {
      
      try {
        const res = await axios.get(`${apiUrl}/getcategory/${searchparam.c_id}`);
        const categoryDetails = res.data[0]
        setCategory(categoryDetails.category);
        setDescription(categoryDetails.description);

      } catch (err) {
        console.log(err);
      }
    };
    
    fetchAllData();
  }, [apiUrl, searchparam.c_id]);
   
  

    const handleUpdate = async (e) => {
   
      e.preventDefault();
     
      let item = {
        c_id,
        category,
        description,
      };
 
      try {
        let result = await fetch(`${apiUrl}/UP_Category/${searchparam.c_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        });
      
        if (result.ok) {
          alert("Details Added Successfully");
          window.location.reload();
          // Clear the fields by resetting the state variables
          setCategory("");
          setDescription("");
         
        } else {
          // Handle error case
          alert("Failed to Update Details.");
        }
      } catch (error) {
        console.error(error);
        alert("Failed to Update record.");
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
    <select className="custom-select form-control" value={category} required onChange={(e)=>{setCategory(e.target.value)}}>

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
                     
                   
                     <button className="btn btn-light me-2" type="submit" onClick={handleUpdate} style={{marginRight:"10px"}}>
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