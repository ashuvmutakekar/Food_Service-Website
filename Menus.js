import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Config from '../../Config';
import { Link, useNavigate } from 'react-router-dom';

export default function Menus() {
  const apiUrl = Config.apiUrl;
  const navigate = useNavigate();
  const [register, setRegister] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/menu");
        console.log(res);
      setRegister(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div style={{ backgroundColor: 'orange' }} >
      <Navbar />
      <div className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid"></div>
      </div>

      <div className="food mt-0">
        <div className="container" >
          <div className="row align-items-center">
            {register.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="food-item">
                  <img src={item.img_data} alt={item.name} />
                  <h2>{item.p_name}</h2>
                  <p>{item.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
