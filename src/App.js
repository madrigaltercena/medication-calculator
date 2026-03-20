import React from 'react';
import MedicationCalculator from './components/MedicationCalculator';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Medication Duration Calculator</h1>
        <p>Calculate how long your medication will last based on quantity and pump rates</p>
      </header>
      <main>
        <MedicationCalculator />
      </main>
    </div>
  );
}

export default App;