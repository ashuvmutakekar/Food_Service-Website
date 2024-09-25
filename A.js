import React, { useState } from 'react';

export default function A() {
  const [values, setValues] = useState(Array(6).fill(''));
  const [sortedValues, setSortedValues] = useState([]);

  const handleChange = (index, e) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
   
    setValues(newValues);
  };
  const bubbleSort = (arr) => {
    var isSwapped;
    var len = arr.length;

    for (var i = 0; i < len; i++) {
      isSwapped = false;

      for (var j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          isSwapped = true;
        }
      }

      if (!isSwapped) {
        break;
      }
    }

    return arr;
  };

  const handleSort = () => {
    const sortedValues = bubbleSort([...values]);
    setSortedValues(sortedValues);
  };

  return (
    <div>
      <div className="container-scroller ">
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper" style={{ backgroundColor: 'aqua' }}>
              <div className="row" style={{ marginTop:'5%' }} >
                {values.map((value, index) => (
                  <div className="col-lg-2 col-sm-6 col-12" key={index}>
                    <div className="control-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => handleChange(index, e)}
                          title="Should be a number with up to 7 digits"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:'5%' }} >
                <button className="btn btn-dark" type="submit" onClick={handleSort}>
                  Sort Array
                </button>
              </div>
              <div className="row" style={{ marginTop:'5%' }} >
                {sortedValues.map((value, index) => (
                  <div className="col-lg-2 col-sm-6 col-12" key={index}>
                    <div className="control-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          value={value}
                          readOnly
                          title="Should be a number with up to 7 digits"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
