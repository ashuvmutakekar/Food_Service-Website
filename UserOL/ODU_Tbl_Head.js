import React from 'react'
import ODU_Tbl_Row from './ODU_Tbl_Row'

export default function ODU_Tbl_Head() {
  return (
    <div className="card">
                  <div className="card-body">
                    <div className="table-top">
                    <div className="search-set">
                        <div className="search-path">
                          <a className="btn btn-filter" id="filter_search">
                            <img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/filter.svg" alt="img" />
                            <span><img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/closes.svg" alt="img" /></span>
                          </a>
                        </div>
                        <div className="search-input">
                          <a className="btn btn-searchset"><img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/search-white.svg" alt="img" /></a>
                        </div>
                      </div>
                      <div className="wordset">
                        <ul>
                          <li>
                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/pdf.svg" alt="img" /></a>
                          </li>
                          <li>
                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/excel.svg" alt="img" /></a>
                          </li>
                          <li>
                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/printer.svg" alt="img" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="table-responsive">
                      <table className="table  datanew">
                        <thead>
                          <tr>
                            <th>
                              <label className="checkboxs">
                                <input type="checkbox" id="select-all" />
                                <span className="checkmarks" />
                              </label>
                            </th>
                            <th>Order No</th>
                            <th>Table No</th>
                            <th>Name</th>
                            <th>Contact no</th>
                            <th>Product Name </th>
                            <th>Quantity </th>
                            <th>Action </th>
                            
                          </tr>
                        </thead>
                        <ODU_Tbl_Row/>
                        </table>
                        </div>
                        
                      </div>
                      </div>
  )
}
