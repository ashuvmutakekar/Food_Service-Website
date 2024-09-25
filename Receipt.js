import React from 'react'
import Navbar from './Navbar'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
export default function Receipt() {
  const [register,setRegister]=useState([]);
  const [registerp,setRegisterp]=useState([]);
  const { order_no } = useParams();
  useEffect(() => {
    const fetchAlldata = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/OrderProductDetails`);

        if (Array.isArray(res.data)) {
          const filteredData = res.data.filter(item => item.order_no === order_no);
          console.log(filteredData);
          setRegister(filteredData);
        } else {
          console.error('Response data is not an array:', res.data.data);
        }

      } catch (err) {
        console.log(err);
      }
    };
    fetchAlldata();
  }, [order_no]);
  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/Order_Details`);

        if (Array.isArray(res.data)) {
          const filteredData = res.data.filter(item => item.order_no === order_no);
          console.log(filteredData);
          setRegisterp(filteredData);
        } else {
          console.error('Response data is not an array:', res.data.data);
        }

      } catch (err) {
        console.log(err);
      }
    };
    fetchAllOrders();
  }, [order_no]);

  return (
    <div style={{backgroundImage: "url(/img/carousel-1.jpg) " }}>
    <Navbar/>
     <div classname="carousel" style={{ height:'650px', width:'700px' }}>
     
  <div >
  <div className="container" style={{ marginLeft:'350px' }}>
    <div id="invoice-POS">
    <center id="top">
      <div className="logo" />
      <div className="info">
        <h2>Restaurant</h2>
      </div>
    </center>
    <div id="mid">
      <div className="info">
        <h2>Contact Info</h2>
        <p style={{fontSize:'15px'}}> 
          Address : street city, state 0000
          <br />
         
          Email :BurgerKing@gmail.com
          <br />
         
          Phone : 9999988888
          <br />
        
        </p>
      </div>
    </div>
    {/*End Invoice Mid*/}
    <div id="bot">
      <div id="table">
        <table>
       
          <tbody >
            <tr className="tabletitle" style={{borderRadius:'2px'}}>
              <td className="item">
                <h2>Item</h2>
              </td>

              <td className="Hours">
                <h2>Quantity</h2>
              </td>
              <td className="Hours">
                <h2>Price</h2>
              </td>
              <td className="Rate">
                <h2>Sub Total</h2>
              </td>
            </tr>
            {register.map((item) => (
            <tr className="service" key={item.order_no}>
              <td className="tableitem">
                {item.product_name}
              </td>
              <td className="tableitem">
              {item.quantity}
              </td>
              <td className="tableitem">
               {item.price}
              </td>
              <td className="tableitem">
                {item.total}
              </td>
            </tr>
            ))}
            
            
            {registerp.map((item) => (
            <tr className="tabletitle" key={item.order_no}>
              <td />
              <td className="Rate">
                <h2>Discount</h2>
              </td>
              <td className="tableitem">
                <p className="itemtext">20%</p>
              </td>
              <td className="payment">
                {item.sub_total}
              </td>
            </tr>
              ))}
               {registerp.map((item) => (
            <tr className="tabletitle" key={item.order_no}>
              <td />
              <td className="Rate">
                <h2>Total</h2>
              </td>
              <td className="payment">
               {item.final_ammount}
              </td>
            </tr>
               ))}
          </tbody>
           
        </table>
      </div>
      <div id="legalcopy">
        <p className="legal" style={{fontSize:'15px'}}>
          <strong>Thank you for your business!</strong> <br/>

          Payment is expected within
          31 days; please process this invoice within that time. There will be a
          5% interest charge per month on late invoices.
        </p>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}
