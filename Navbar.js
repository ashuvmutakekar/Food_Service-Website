import React from 'react'

export default function Navbar() {
  return (
    <div><div className="navbar navbar-expand-lg bg-light navbar-light">
    <div className="container-fluid">
      <a href="/home" className="navbar-brand">
        Burger <span>King</span>
      </a>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div className="navbar-nav ml-auto">
          <a href="/" className="nav-item nav-link active">
            Home
          </a>
          <a href="/abouts" className="nav-item nav-link ">
            About
          </a>
          <a href="/menus" className="nav-item nav-link">
           Menu
          </a>
            
          <a href="/order" className="nav-item nav-link">
           Order
          </a>
         
        
          <a href="/feedback" className="nav-item nav-link">
           Feedback
          </a>
         
          
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
