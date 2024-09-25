import React, { useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom'; // Import useParams from react-router-dom

import Config from '../../Config';
import Navbar from './Navbar';

export default function Payments() {
  const navigate = useNavigate();
  const apiUrl = Config.apiUrl;
  const { order_no } = useParams(); // Use useParams here
  const { final_ammount } = useParams(); // Use useParams here
  const [card_no, setCard_no] = useState();
  const [card_name, setCard_name] = useState();
  const [ex_date, setEx_date] = useState();
  const [cvv, setCvv] = useState();
  const [total_ammount, setTotal_ammount] = useState(final_ammount);

  const handlePayment = async (e) => {
    e.preventDefault();
  
    let payment = {
      card_no,
      card_name,
      ex_date,
      cvv,
      total_ammount,
    };
  
    try {
      let result = await fetch(`${apiUrl}/add_payments/${order_no}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payment),
      });
  
      if (result.ok) {
        alert('Payment done Successfully');
        setCard_no("");
        setCard_name("");
        setEx_date("");
        setCvv("");
        setTotal_ammount("");
      } else {
        alert('Failed to add Details.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to save record.');
    }
  };
  const handleReceipts = () => {
    navigate(`/receipt/${order_no}`);
};

  return (
    <div>
      <Navbar />
      <section className="p-4 p-md-5" style={{ backgroundColor: 'orange', height: '700px' }}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-5" style={{ width: '700px', height: '500px' }}>
            <div className="card rounded-3">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <h2>Payment</h2>
                </div>
                <form>
                  <div className="d-flex flex-row align-items-center mb-4 pb-1">
                    <img className="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" />
                    <div className="flex-fill mx-3">
                      <div className="form-outline">
                        <input
                          type="number"
                          id="formControlLgXs"
                          className="form-control form-control-lg"
                          defaultValue="**** **** **** 0000"
                          onChange={(e) => {
                            setCard_no(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="formControlLgXsd"
                      className="form-control form-control-lg"
                      placeholder="Enter Cardholders Name"
                      onChange={(e) => {
                        setCard_name(e.target.value);
                      }}
                    />
                  </div>
                  <div className="row mb-4">
                    <div className="col-7">
                      <div className="form-outline">
                        <input
                          type="number"
                          id="formControlLgXM"
                          className="form-control form-control-lg"
                          readOnly
                          value={total_ammount}
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="form-outline">
                        <input
                          type="date"
                          id="formControlLgExpk"
                          className="form-control form-control-lg"
                          placeholder="Expiry date"
                          onChange={(e) => {
                            setEx_date(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="formControlLgcvv"
                          className="form-control form-control-lg"
                          placeholder="Cvv"
                          onChange={(e) => {
                            setCvv(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-success btn-lg btn-block" onClick={handlePayment}>
                    Make payment
                  </button>
                  <br/>
                  <br/>
                
                  <button
                            type="button"
                            className="btn  m-b-sm"
                            data-dismiss="modal"
                            style={{marginLeft:'500px', backgroundColor:'black', color:'white'}}
                            onClick={handleReceipts}
                          >
                          get receipt
                          </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
