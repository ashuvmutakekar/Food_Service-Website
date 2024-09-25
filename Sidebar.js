import React from 'react'

export default function Sidebar() {
  return (
    <div >
       <div  style={{height:"100%"}}>
      <nav className="sidebar sidebar-offcanvas " id="sidebar"   >
        
  <div className="text-center sidebar-brand-wrapper d-flex align-items-center" >
    <a className="sidebar-brand brand-logo" href="index.html">
      <img src="assets/images/king.png" alt="king" />
    </a>
    <a className="sidebar-brand brand-logo-mini pl-4 pt-3" href="index.html">
      <img src="assets/images/logo-mini.svg" alt="logo" />
    </a>
  </div>
 
  <ul className="nav">
    <li className="nav-item nav-profile">
      <a href="#" className="nav-link">
        <div className="nav-profile-image">
          <img src="assets/images/faces/face1.jpg" alt="profile" />
          <span className="login-status online" />
          {/*change to offline or busy as needed*/}
        </div>
        <div className="nav-profile-text d-flex flex-column pr-3">
          <span className="font-weight-medium mb-2">Burger King</span>
          <span className="font-weight-normal">$8,753.00</span>
        </div>
        <span className="badge badge-danger text-white ml-3 rounded">3</span>
      </a>
    </li>
  
    <li className="nav-item">
      <a className="nav-link" href="login">
        <i className="mdi mdi-home menu-icon" />
        <span className="menu-title">Login</span>
      </a>
    </li>
    
    
   
    <li className="nav-item">
      
      <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle menu-title"
              data-toggle="dropdown"
            >
              Product
            </a>
            <div className="dropdown-menu ">
              <a href="/add_product" className="dropdown-item">
               Add Product
              </a>
              <a href="/product_list" className="dropdown-item">
               List Product
              </a>
            </div>
          </div>
          
    </li>
    
    <li className="nav-item nav-link  " style={{marginLeft:"30px"}}>
    <a className="nav-link" href="/order_list">
      
        <span className="menu-title">order list</span>
      </a>
    </li>
    <br/>
    <li className="nav-item nav-link  " style={{marginLeft:"30px"}}>
    <a className="nav-link" href="/feedback_list">
        
        <span className="menu-title">feedback list</span>
      </a>
    </li>
   
  </ul>
  
</nav>
</div>
    </div>
  )
}
