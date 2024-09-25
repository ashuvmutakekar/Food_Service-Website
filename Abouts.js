import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Abouts() {
  return (
    <div><div>
    <Navbar/>
    
    {/* Page Header Start */}
    <div className="page-header mb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>About Us</h2>
          </div>
          <div className="col-12">
            <a href="">Home</a>
            <a href="">About Us</a>
          </div>
        </div>
      </div>
    </div>
    {/* Page Header End */}
    {/* Food Start */}
    <div className="food mt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="food-item">
              <i className="flaticon-burger" />
              <h2>Burgers</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit
                facilis ornare velit non vulputa. Aliquam metus tortor auctor quis
                sem.
              </p>
              <a href="">View Menu</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="food-item">
              <i className="flaticon-snack" />
              <h2>Snacks</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit
                facilis ornare velit non vulputa. Aliquam metus tortor auctor quis
                sem.
              </p>
              <a href="">View Menu</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="food-item">
              <i className="flaticon-cocktail" />
              <h2>Beverages</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit
                facilis ornare velit non vulputa. Aliquam metus tortor auctor quis
                sem.
              </p>
              <a href="">View Menu</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Food End */}
    {/* About Start */}
    <div className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="img/about.jpg" alt="Image" />
              <button
                type="button"
                className="btn-play"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-target="#videoModal"
              >
                <span />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-header">
                <p>About Us</p>
                <h2>Cooking Since 1990</h2>
              </div>
              <div className="about-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                  viverra quis sem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                  viverra quis sem. Curabitur non nisl nec nisi scelerisque
                  maximus. Aenean consectetur convallis porttitor. Aliquam
                  interdum at lacus non blandit.
                </p>
                <a className="btn custom-btn" href="">
                  Book A Table
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Video Modal Start*/}
    <div
      className="modal fade"
      id="videoModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            {/* 16:9 aspect ratio */}
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src=""
                id="video"
                allowscriptaccess="always"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Video Modal End */}
  </div>
  <Footer/>
  </div>
  )
}
