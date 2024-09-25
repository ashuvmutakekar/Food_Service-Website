import React from 'react'

export default function ODU_Tbl_Row() {
  return (
    <tbody>
    <tr>
    <td>
      <label className="checkboxs">
        <input type="checkbox" />
        <span className="checkmarks" />
      </label>
    </td>
    <td>Burger</td>
    <td>50</td>
    <td>available</td>
    <td>imj1.jpg</td>
    <td>available</td>
    <td>imj1.jpg</td>
    <td>
                <a className="me-3" href="https://dreamspos.dreamguystech.com/html/template/product-details.html">
                  <img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/eye.svg" alt="img" />
                </a>
                <a className="me-3" href="https://dreamspos.dreamguystech.com/html/template/editproduct.html">
                  <img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/edit.svg" alt="img" />
                </a>
                <a className="confirm-text" href="javascript:void(0);">
                  <img src="https://dreamspos.dreamguystech.com/html/template/assets/img/icons/delete.svg" alt="img" />
                </a>
              </td>
    
   
  </tr>
  

</tbody>
  )
}
