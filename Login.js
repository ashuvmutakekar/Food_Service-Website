import React, { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import Config from '../Config';
import Header from './Header';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const apiUrl = Config.apiUrl;
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState('default@example.com');
  const [password, setPassword] = useState('Ashu2552');
  const navigate=useNavigate()

  const handleLogin = async () => {
    navigate(`/add_product`);;
    try {
      // Assuming you have a backend API for authentication
      const response = await fetch(`${apiUrl}/email_get`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
       
        // Redirect to dashboard after successful login
        navigate(`/add_category`);
        setSearchParams({}); // Clear any search params
      
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
        
        <div className="row">
         
         
          <div className="col-12 grid-margin stretch-card" >
            <div className="card" >
              <div className="card-body"  style={{backgroundColor:" #80aaff"}}>
               
               <br></br>
                <form >
                    <h1 style={{ fontFamily: "Times New Roman", color: "white" }}>Login</h1>



                    <div className="control-group">
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                          title="Enter a valid email address"
                          required="required"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <i className="far fa-envelope" />
                          </div>
                        </div>
                      </div>
                    </div>
<br/>
                    <div className="control-group">
                      <div className="input-group">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          placeholder="Password"
                          title="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character"
                          required
                          value={password}
                          onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                            <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"} />
                          </div>
                        </div>
                      </div>
                    </div>

<br/>


                    <div className="button-container">
                      <button className="btn btn-dark" type="submit" onClick={handleLogin}>
                        Login
                      </button>

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