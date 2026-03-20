import React, { useState } from 'react';

const MedicationCalculator = () => {
  const [quantity, setQuantity] = useState('');
  const [phase1Rate, setPhase1Rate] = useState('');
  const [phase2Rate, setPhase2Rate] = useState('');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const calculateDuration = () => {
    const qty = parseFloat(quantity);
    const rate1 = parseFloat(phase1Rate);
    const rate2 = parseFloat(phase2Rate);

    // Validate inputs
    if (isNaN(qty) || qty <= 0) {
      alert('Please enter a valid medication quantity greater than 0');
      return;
    }
    
    if (isNaN(rate1) || rate1 <= 0) {
      alert('Please enter a valid Phase 1 pump rate greater than 0');
      return;
    }

    if (isNaN(rate2) || rate2 <= 0) {
      alert('Please enter a valid Phase 2 pump rate greater than 0');
      return;
    }

    // Calculate durations
    const phase1Duration = qty / rate1; // hours
    const phase2Duration = qty / rate2; // hours
    const totalDuration = phase1Duration + phase2Duration; // hours

    // Convert to days, hours, minutes for display
    const phase1Days = Math.floor(phase1Duration / 24);
    const phase1Hours = Math.floor(phase1Duration % 24);
    const phase1Minutes = Math.floor((phase1Duration % 1) * 60);

    const phase2Days = Math.floor(phase2Duration / 24);
    const phase2Hours = Math.floor(phase2Duration % 24);
    const phase2Minutes = Math.floor((phase2Duration % 1) * 60);

    const totalDays = Math.floor(totalDuration / 24);
    const totalHours = Math.floor(totalDuration % 24);
    const totalMinutes = Math.floor((totalDuration % 1) * 60);

    setResults({
      quantity: qty,
      phase1Rate: rate1,
      phase2Rate: rate2,
      phase1Duration: phase1Duration,
      phase2Duration: phase2Duration,
      totalDuration: totalDuration,
      phase1Days, phase1Hours, phase1Minutes,
      phase2Days, phase2Hours, phase2Minutes,
      totalDays, totalHours, totalMinutes
    });
    setShowResults(true);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h2>Medication Calculator</h2>
        
        <div className="input-group">
          <label htmlFor="quantity">Medication Quantity (ml):</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter medication quantity in ml"
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="input-group">
          <label htmlFor="phase1Rate">Phase 1 Pump Rate (ml/hour):</label>
          <input
            type="number"
            id="phase1Rate"
            value={phase1Rate}
            onChange={(e) => setPhase1Rate(e.target.value)}
            placeholder="Enter Phase 1 pump rate in ml/hour"
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="input-group">
          <label htmlFor="phase2Rate">Phase 2 Pump Rate (ml/hour):</label>
          <input
            type="number"
            id="phase2Rate"
            value={phase2Rate}
            onChange={(e) => setPhase2Rate(e.target.value)}
            placeholder="Enter Phase 2 pump rate in ml/hour"
            min="0.01"
            step="0.01"
          />
        </div>

        <button 
          className="calculate-button"
          onClick={calculateDuration}
          disabled={!(quantity && phase1Rate && phase2Rate)}
        >
          Calculate Duration
        </button>

        {showResults && results && (
          <div className="results-section">
            <h3>Calculation Results:</h3>
            
            <div className="calculation-steps">
              <h4>Step-by-Step Calculation:</h4>
              <p><strong>Medication Quantity:</strong> {results.quantity} ml</p>
              
              <div className="phase-calculation">
                <h5>Phase 1 Calculation:</h5>
                <p><strong>Formula:</strong> Duration = Quantity ÷ Pump Rate</p>
                <p><strong>Calculation:</strong> {results.quantity} ml ÷ {results.phase1Rate} ml/hour = {results.phase1Duration.toFixed(2)} hours</p>
                <p><strong>Result:</strong> {results.phase1Days} days, {results.phase1Hours} hours, {results.phase1Minutes} minutes</p>
              </div>

              <div className="phase-calculation">
                <h5>Phase 2 Calculation:</h5>
                <p><strong>Formula:</strong> Duration = Quantity ÷ Pump Rate</p>
                <p><strong>Calculation:</strong> {results.quantity} ml ÷ {results.phase2Rate} ml/hour = {results.phase2Duration.toFixed(2)} hours</p>
                <p><strong>Result:</strong> {results.phase2Days} days, {results.phase2Hours} hours, {results.phase2Minutes} minutes</p>
              </div>

              <div className="total-calculation">
                <h5>Total Duration:</h5>
                <p><strong>Formula:</strong> Total Duration = Phase 1 Duration + Phase 2 Duration</p>
                <p><strong>Calculation:</strong> {results.phase1Duration.toFixed(2)} hours + {results.phase2Duration.toFixed(2)} hours = {results.totalDuration.toFixed(2)} hours</p>
                <p><strong>Result:</strong> {results.totalDays} days, {results.totalHours} hours, {results.totalMinutes} minutes</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicationCalculator;