import React from "react";
import { PiGenderFemale, PiGenderMale, PiGenderNonbinary } from "react-icons/pi"
import "./GenderSelection.css";

const GenderSelection = ({ onGenderSelect }) => {
  return (
    <div>
      <h1 className="title">
        Saia da Armadilha<br></br>
        <span className="title-span">do Burnout</span>
      </h1>

      <p className="subtitle">
        Sua jornada para uma vida mais equilibrada<br></br> e plena começa
        agora!
      </p>

      <div className="gender-selection">
        <h3 className="gender-title">Selecione seu gênero para começar</h3>
        <div className="gender-buttons">
          <button onClick={() => onGenderSelect("Feminino")}>
            <PiGenderFemale size={50} />
            <span>Feminino</span>
          </button>
          <button onClick={() => onGenderSelect("Masculino")}>
            <PiGenderMale size={50} />
            <span>Masculino</span>
          </button>
          <button onClick={() => onGenderSelect("Não binário")}>
            <PiGenderNonbinary size={50} />
            <span>Não binário</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
