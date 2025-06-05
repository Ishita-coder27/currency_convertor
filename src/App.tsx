import React, { useState } from 'react';
import './App.css'; // Make sure this file exists

// ✅ Corrected Currency Type
type Currency = {
  name: string;
  value: number;
  symbol: string;
};

// ✅ Sample Currency List
const currencyByRupee: Currency[] = [
  { name: 'USD', value: 0.012, symbol: '$' },
  { name: 'EUR', value: 0.011, symbol: '€' },
  { name: 'JPY', value: 1.78, symbol: '¥' },
  { name: 'GBP', value: 0.0095, symbol: '£' },
  { name: 'CAD', value: 0.016, symbol: 'C$' },
];

// ✅ Button Component
const CurrencyButton = ({ name, symbol }: Currency) => (
  <span style={{ fontWeight: 'bold' }}>{symbol} {name}</span>
);

// ✅ Main App Component
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      alert('Enter a value to convert');
      return;
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      alert('Not a valid number to convert');
    }
  };

  return (
    <div className="container">
      <h2 className="heading">💰 Ishita's Currency Converter</h2>

      <div className="topContainer">
        <div className="inputGroup">
          <span className="rupee">₹</span>
          <input
            className="inputAmountField"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter amount in Rupees"
          />
        </div>
        {resultValue && <p className="resultTxt">{resultValue}</p>}
      </div>

      <div className="bottomContainer">
        {currencyByRupee.map((item) => (
          <button
            key={item.name}
            className={`button ${targetCurrency === item.name ? 'selected' : ''}`}
            onClick={() => buttonPressed(item)}
          >
            <CurrencyButton {...item} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
