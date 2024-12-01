import React, { useState } from "react";
import "./BmiCalculator.css";

const BmiCalculator = () => {
  // State variables to store user input for weight and height
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  // State variables to store the calculated BMI and its corresponding status
  const [bmi, setBmi] = useState(null); // Stores the calculated BMI value
  const [status, setStatus] = useState(""); // Stores the BMI category

  // Function to calculate the BMI
  const calculateBMI = () => {
    // Validate that both fields are filled
    if (!weight || !height) {
      alert("Please enter both weight and height!");
      return;
    }

    // Convert height from cm to meters and calculate BMI
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (
      parseFloat(weight) /
      (heightInMeters * heightInMeters)
    ).toFixed(2); // Calculate BMI and round it to 2 decimal places
    setBmi(bmiValue); // Update the BMI state

    // Determine the BMI category based on the calculated value
    let bmiStatus = "";
    if (bmiValue < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmiValue < 24.9) {
      bmiStatus = "Normal weight";
    } else if (bmiValue < 29.9) {
      bmiStatus = "Overweight";
    } else {
      bmiStatus = "Obesity";
    }
    setStatus(bmiStatus); // Update the BMI status state
  };

  // Function to reset all fields and states
  const resetFields = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setStatus("");
  };

  return (
    <div className="container">
      <div className="inputwrap">
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </label>
      </div>
      <div className="button-group">
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={resetFields} className="reset-button">
          Reset
        </button>
      </div>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <h3>Status: {status}</h3>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
