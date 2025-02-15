import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter valid height and weight!");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    let category = "";
    if (bmiValue < 18.5) category = "Underweight";
    else if (bmiValue >= 18.5 && bmiValue < 25.0) category = "Healthy";
    else if (bmiValue >= 25.0 && bmiValue < 30.0) category = "Overweight";
    else category = "Obese";

    setStatus(category);
  };


  return (
    <div className="container" style={{ backgroundColor: "#121212", padding: "40px", borderRadius: "10px", marginTop: "35px", marginBottom: "35px" }}>
      <div className="row">
        {/* BMI Chart Section */}
        <div className="col-md-6">
          <h6 className="text-warning">CHECK YOUR BODY</h6>
          <h2 className="text-white fw-bold">BMI CALCULATOR CHART</h2>
          <table className="table table-dark table-bordered mt-3">
            <thead>
              <tr>
                <th>BMI</th>
                <th>WEIGHT STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Below 18.5</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5 - 24.9</td>
                <td>Healthy</td>
              </tr>
              <tr>
                <td>25.0 - 29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30.0 - and Above</td>
                <td>Obese</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BMI Calculator Section */}
        <div className="col-md-6">
          <h6 className="text-warning">CHECK YOUR BODY</h6>
          <h2 className="text-white fw-bold">CALCULATE YOUR BMI</h2>
          <p className="text-light" style={{ fontSize: "14px" }}>
            Enter your height and weight to calculate your BMI.
          </p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input 
                type="number" 
                className="form-control" 
                placeholder="Height (cm)" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
              />
            </div>
            <div className="col-md-6 mb-3">
              <input 
                type="number" 
                className="form-control" 
                placeholder="Weight (kg)" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
              />
            </div>
          </div>
          <button 
            className="btn w-100 text-white" 
            style={{ backgroundColor: "#ff7b00", border: "none", fontWeight: "bold" }} 
            onClick={calculateBMI}
          >
            CALCULATE
          </button>

          {/* Display BMI Result */}
          {bmi && (
            <div className="mt-4 text-center">
              <h4 className="text-light">Your BMI: <span className="text-warning">{bmi}</span></h4>
              <h5 className="text-light">Weight Status: <span className="text-warning">{status}</span></h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
