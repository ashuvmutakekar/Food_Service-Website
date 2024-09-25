import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { useState } from 'react';
import Config from '../../Config';
export default function Add_product() {
  const apiUrl=Config.apiUrl;
  const [category,setCategory]=useState();
const [sub_category, setSub_category]=useState();
const [p_name,setP_name]=useState();
const [price,setPrice]=useState();
const [description,setDescription]=useState();
const [img_name,setImg_name]=useState(null);
  const handleClike = async (e) => {
    e.preventDefault();
  
    let item = {
      p_name,
      price,
      description,
      img_name,
      sub_category,
       category
    };
    try {
      let result = await fetch(`${apiUrl}/Add_product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
  
      if (result.ok) {
        alert("Product Added Successfully");
  
        // Clear the fields by resetting the state variables
        setP_name("");
        setPrice("");
        setDescription("");
        setImg_name("null");
        setSub_category("");
        setCategory("");
  
        window.location.reload();
      } else {
        // Handle error case
        alert("Failed to add Product.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save record.");
    }
  };
  
  return (
    <div>
      <div className="container-scroller" >
      <Header/>
      <Sidebar/>
  <div className="container-fluid page-body-wrapper" >
 
    
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Forms</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {" "}
               add Product{" "}
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
         
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body" style={{backgroundColor:" #80aaff"}}>
                <h4 className="card-title">ADD PRODUCT
                </h4>
               <br></br>
               <form>
          <div className="row">
            <br/>
            <div className="col-lg-3 col-sm-6 col-12">
          <div className="control-group">
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
                <br/>
                <div className="col-lg-3 col-sm-6 col-12">
          <div className="control-group">
          <select className="custom-select form-control" required onChange={(e)=>{setSub_category(e.target.value)}}>
        <option value="" disabled selected>
          Select Sub Catgory
        </option>
        <option value="Veg">Veg</option>
        <option value="Non Veg">Non Veg</option>
      
       
        {/* Add more category options as needed */}
      </select>
                </div>
                </div>
            <br/>
            <br/>
            <div className="col-lg-3 col-sm-6 col-12">
          <div className="control-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      pattern="^[^0-9]+$"
                      title="Name should not contain numbers"
                      required="required"
                      onChange={(e)=>{setP_name(e.target.value)}}
                    />
                 
                  </div>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
          <div className="control-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="price"
                      pattern="^\d{1,7}$"
                      title="Should be a number with up to 7 digits"
                      required="required"
                      onChange={(e)=>{setPrice(e.target.value)}}
                    />
                 
                  </div>
                </div>
                </div>
          <br/>
          <br/>
          <br/>
            
          
          
                <div className="col-lg-6 col-sm-2 col-12">
         
         <div className="control-group">
             <div className="input-group">
             
             <br/>
             <textarea className="form-control" placeholder='Description' rows={4} required onChange={(e)=>{setDescription(e.target.value)}}>Desription</textarea>
             </div>
             <br/> 
             </div>
           </div>
           
        
            
           
           <div className="col-lg-6 col-sm-2 col-12">
            <div className=" form-control  ">
                <div className="input-group ">
                
                <br/>
                  
                  <div className="image-upload form-group ">
                            <input type="file" className='form-control ' required="required" onChange={(e)=>{setImg_name(e.target.value)}}/>
                            <div className="image-uploads ">
                            </div>
                          </div>
                </div>
              </div>

        
                       <br/>
                       <div style={{marginRight:'00px'}} >
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