import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div className="container">
      <div className="inputwrap">
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default BmiCalculator;
