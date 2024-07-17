import React, { useState } from 'react';
import "./AgeCalc.css";

function AgeCalculator() {
  const [age, setAge] = useState(0);
  const [dogAge, setDogAge] = useState(0);

  const calculateDogAge = () => {
    if (age <= 0) {
      alert('Por favor, ingrese una edad válida.');
    } else {
      setDogAge(age * 7);
    }
  };

  let message;
  if (dogAge >= 40) {
    message = 'Eres un perro viejo';
  } else if (dogAge >= 20 && dogAge <= 39) {
    message = 'Eres un perro adulto';
  } else {
    message = 'Eres un cachorrito';
  }

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Calculadora de Edad Canina</h2>
        <label>Ingresa tu edad:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button className="button" onClick={calculateDogAge}>Calcular Edad Canina</button>
        {dogAge > 0 && (
          <div>
            <p>Tu edad canina es: {dogAge} años</p>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgeCalculator;
