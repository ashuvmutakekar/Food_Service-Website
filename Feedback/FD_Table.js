import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { useState,useEffect } from 'react';
import axios from 'axios'
export default function FD_Table() {
  const [register,setRegister]=useState([]);
  useEffect(() => {
  const fetchAlldata = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/Feedback`);
     
      if (Array.isArray(res.data)) {
        
        setRegister(res.data);
      } else {
        console.error('Response data is not an array:', res.data.data);
      }
      
    } catch (err) {
      console.log(err);
    }
  };
  fetchAlldata();
}, []);
  return (
    <div>
      
      <div className="container-scroller" >
      <Header/>
      <Sidebar/>
  <div className="container-fluid page-body-wrapper" >
 
    
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">Feedback List</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Forms</a>
              </li>
             
            </ol>
          </nav>
        </div>
        <div className="row">
         
         
        <div className="col-lg-12 grid-margin stretch-card">
  <div className="card">
  
    <div className="card-body">
      
      <h4 className="card-title">Striped Table</h4>
      <p className="card-description">
        {" "}
        Add class <code>.table-striped</code>
      </p>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
           
              <th> Name</th>
              <th>Contact</th>
             
              <th>Description</th>
             
            </tr>
          </thead>
          <tbody style={{ width: '1200px' }}>
                
          {register.map((index) => (
    <tr key={index}>
        <td>{index.name}</td>
        <td>{index.mob_no}</td>
        <td>{index.description}</td>
        
        <td> 
            
            
        </td>
    </tr>
))} 
                 
                
                </tbody>
        </table>
      </div>
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
