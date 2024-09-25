import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { useState,useEffect } from 'react';
import axios from 'axios'
export default function OD_Table() {
  const [register,setRegister]=useState([]);
  const [registerp,setRegisterp]=useState([]);
  useEffect(() => {
  const fetchAlldata = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/Order_Details`);
     
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
const handleCancel = () => {
  window.location.reload(); // Navigate to the home page
};

const fetchProductList = async (order_no) => {
  try {
    const res = await axios.get(`http://localhost:3000/OrderPaymentDetails`);
    console.log(res.data); // Log the response data
    if (Array.isArray(res.data)) {
       const filteredData = res.data.filter(item => item.order_no === order_no);
      console.log(filteredData);
      setRegisterp(filteredData);

     
    } else {
      console.error('Response data is not an array:', res.data);
    }
  } catch (err) {
    console.log(err);
  }
};



const handleProduct = async (order_no, e) => {
  e.preventDefault(); // Prevent the default behavior of the button
  fetchProductList(order_no);   
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
          <h3 className="page-title">Order List</h3>
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
           
                <th>Order No</th>
                <th>Table No</th>
             
             
            </tr>
          </thead>
          <tbody style={{ width: '1200px' }}>
                
          {register.map((item) => (
  <tr key={item.order_no}>
    <td>{item.order_no}</td>
    <td>{item.table_no}</td>
    <td>
    <button
  type="button"
  className="btn btn-success m-b-sm btn-lg btn-block"
  data-toggle="modal"
  data-target="#myModal"
  onClick={(e) => handleProduct(item.order_no, e)}
  data-order-no={item.order_no} // Add data attribute here
>
  View product
</button>

      
      
    </td>
    
  </tr>
   
))}

                 
                
                </tbody>
             
                <div
  className="modal fade " 
  id="myModal"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="myModalLabel"
  aria-hidden="true"

>
                    <div className="custom-modal-dialog col-sm-6 offset-sm-3" >
                      <div className="modal-content">
                       
                      <div className="table-responsive">
       <table
                  id="example3"
                  className="display table"
                  style={{ width: "100%", cellspacing: 0 }}
                >
                  <thead>
  <tr>
    <th>Product Name</th>
    <th>Quantity</th>
    <th>Price</th>
  </tr>
</thead>
<tbody>
  {registerp.map((item) => (
    <tr key={item.product_id}>
      <td>{item.product_name}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
    </tr>
  ))}
</tbody>

                </table>
                <button
                            type="button"
                            className="btn btn-success m-b-sm"
                            data-dismiss="modal"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
        </div>
                       
                     
                      
                        
                        
                        
                    
                      
                        
                      </div>
                    </div>
                  </div>
                  
               
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
