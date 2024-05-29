import React from 'react';
import './AgeQuestion.css';

const AgeQuestion = ({ onAgeSubmit }) => {
  return (
    <div className="age-question">
      <h2>Quantos anos você tem?</h2>
      <div className="age-options">
        <button onClick={() => onAgeSubmit('Menos de 18 anos')}>Menos de 18 anos</button>
        <button onClick={() => onAgeSubmit('18 a 24 anos')}>18 a 24 anos</button>
        <button onClick={() => onAgeSubmit('25 a 34 anos')}>25 a 34 anos</button>
        <button onClick={() => onAgeSubmit('35 a 44 anos')}>35 a 44 anos</button>
        <button onClick={() => onAgeSubmit('45 a 54 anos')}>45 a 54 anos</button>
        <button onClick={() => onAgeSubmit('Mais de 55 anos')}>Mais de 55 anos</button>
      </div>
    </div>
  );
};

export default AgeQuestion;