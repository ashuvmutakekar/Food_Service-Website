import React from 'react'
import ODU_Tbl_Head from './ODU_Tbl_Head'
import Navbar from '../Navbar'


export default function ODU_Tbl_Back() {
  return (
    <div style={{backgroundColor:'orange', height:'650px'}}>
    <Navbar/>
    <div  style={{ paddingTop:'1px'}}>
    <div  className=" container " style={{marginTop:'00px'}}>
      <div >
        <div className="page-title" style={{textAlign:'left',color:'white',marginInline:'40px',paddingTop:'20px'}}>
          <h4 style={{color:'white',fontSize:'30px'}}>Order List</h4>
          <h6 style={{color:'white',fontSize:'20px'}} >Choose Your Orders</h6>
        </div>
        <div className="page-btn foem-control" style={{ height:'45px',width:'250px',backgroundColor:'white', borderRadius:'10px',marginInline:'850px',paddingBottom:'20px'}}>
          <a href="https://dreamspos.dreamguystech.com/html/template/addproduct.html" className="btn btn-added form-control"><img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/plus.svg" alt="img" className="me-1"  /> New Orders</a>
        </div>
      </div>
      
        <div className="card-body" style={{paddingRight:"500px",width:'1600px',paddingTop:'10px'}}>
          
          <div className="card mb-0" id="filter_inputs">
            <div className="card-body pb-0">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="row">
                   
                    
                    
                  
                    <div className="col-lg-1 col-sm-6 col-12">
                      <div className="form-group">
                        <a className="btn btn-filters ms-auto"><img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/search-whites.svg" alt="img" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
              <ODU_Tbl_Head/>
              
            
         
        </div>
      </div>
    </div>
    </div>
  )
}
