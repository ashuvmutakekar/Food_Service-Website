import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Config from '../../Config';
import { useNavigate } from 'react-router-dom';

export default function UP_product() {
  const location = useLocation();
  const searchparam = useParams();
  const apiUrl = Config.apiUrl;
  const[p_id,setP_id]=useState();
  const [category, setCategory] = useState('');
  const [sub_category, setSub_category] = useState('');
  const [p_name, setP_name] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img_name, setimg_name] = useState(null); // State to store the selected image file
  const navigate=useNavigate()
  useEffect((p_id) => {
    const fetchProductDetails = async () => {
      try {
        const res = await axios.get(`${apiUrl}/getproduct/${searchparam.p_id}`);
        const productDetails = res.data[0];
        setP_name(productDetails.p_name);
        setPrice(productDetails.price);
        setDescription(productDetails.description);
        setimg_name(productDetails.img_name);
        setSub_category(productDetails.sub_category);
        setCategory(productDetails.category);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductDetails();
  }, [apiUrl, searchparam.p_id]);
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('p_id', p_id);
    formData.append('p_name', p_name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('img_name', img_name);
    formData.append('sub_category', sub_category);
    formData.append('category', category);
    
    // try {
  //     let result = await axios.put(${apiUrl}/UP_product/${p_id}, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     if (result.ok) {
  //       alert('Details Added Successfully');
  //       window.location.reload();
  //       // Clear the fields by resetting the state variables
  //       setP_name('');
  //       setPrice('');
  //       setDescription('');
  //       setSub_category('');
  //       setCategory('');
  //       setimg_name(null);
  //     } else {
  //       alert('Failed to Update Details.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert('Failed to Update record.');
  //   }
  // };
  let item = {
    p_id,
    p_name,
    price,
    description,
    img_name,
    sub_category,
    category,
   
  };

  try {
    let result = await fetch(`${apiUrl}/UP_product/${searchparam.p_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
  
    if (result.ok) {
      alert("Details Added Successfully");
      navigate(`/product_list`)
      // Clear the fields by resetting the state variables
      setP_name("");
        setPrice("");
        setDescription("");
        setSub_category("");
        setCategory("");
        setimg_name(null);
     
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
          <div className="col-lg-3 col-sm-3 col-12">
          <div className="control-group">
          <select className="custom-select form-control" value={category} required onChange={(e)=>{setCategory(e.target.value)}}>
        <option  disabled selected>
          Select Catgory
        </option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
        <option value="Chinese">chinese</option>
      </select>
                </div>
                </div>
                <br/>
          <div className="col-lg-3 col-sm-3 col-12">
          <div className="control-group">
        <select className="custom-select form-control" value={sub_category} required onChange={(e)=>{setSub_category(e.target.value)}}>
        <option disabled selected>
          Select Sub Catgory
        </option>
        <option value="Veg">Veg</option>
        <option value="Non Veg">Non Veg</option>
        {/* Add more category options as needed */}
      </select>
                </div>
                </div>
            <br/>
            <div className="col-lg-3 col-sm-3 col-12">
          <div className="control-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      pattern="^[^0-9]+$"
                      title="Name should not contain numbers"
                      value={p_name}
                      required="required"
                      onChange={(e)=>{setP_name(e.target.value)}}
                    />
                  </div>
                </div>
                </div>
                <br/> 
                <br/>
             <br/>
            
            
                <div className="col-lg-3 col-sm-3 col-12">
          <div className="control-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="price"
                      pattern="^\d{1,7}$"
                      title="Should be a number with up to 7 digits"
                      value={price}
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
             <textarea className="form-control" 
             placeholder='Description' rows={4}
             value={description}
              required onChange={(e)=>{setDescription(e.target.value)}}>
              Desription
              </textarea>
             </div>    
             </div>
           </div>
           <br/>
          <br/>
          <br/>
                <br/>
           <div className="col-lg-6 col-sm-2 col-12">
           <div className="col-lg-6 col-sm-2 col-12">
  <div className="form-group">
    <div className="input-group">
      <br/>
      <input 
        type="file" 
        className='form-control' 
        required
        onChange={(e) => setimg_name(e.target.files[0])} // Use files array to access the selected file
      />
      <div className="image-uploads"></div>
    </div>
  </div>
</div>


        
                       <br/>
                       <div style={{marginRight:'00px'}} >
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