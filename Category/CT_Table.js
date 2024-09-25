import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Config from '../../Config';
import  { useEffect, useState } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
export default function CT_Table() {
  const apiUrl=Config.apiUrl
  const navigate=useNavigate()
 
  const [register,setRegister]=useState([]);
  useEffect(()=>{
    const fetchAlldata=async()=>{
      try{
        const res=await axios.get("http://localhost:3000/get")
        console.log(res);
       setRegister(res.data)
      }catch(err){
        console.log(err)
      }

    }
    fetchAlldata()
  },[])
  
  function handleDelete(c_id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Category?"
    );
    if (confirmDelete) {
      fetch(`${apiUrl}/Delete_category/${c_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())

        .then((data) => {
          
          // Perform any desired actions after successful deletion

          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
          // Handle the error case here
        });
    }
   
  }
  
  const handleUpdate=(c_id)=>{
    
    
    navigate(`/UP_category/${c_id}`)



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
        <h3 className="page-title">Product List</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Forms</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="add_category">add category</a>
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
         
            <th>Category</th>
            <th>Subcategory</th>
            <th>Action</th>
          </tr>
        </thead>
       <tbody>

       {register.map((item) => (
                <tr key={item.c_id}>
                 
                  
            <td>{item.category}</td>
            <td>{item.description}</td>
            <td>  
             <button
  className="btn btn-info"
  type="submit"
  onClick={() => handleUpdate(item.c_id)}
  style={{ marginRight: "10px" }}
>
  Update
</button>

      <button className="btn btn-secondary" button onClick={() => handleDelete(item.c_id)} type="submit">
       Delete
      </button>
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