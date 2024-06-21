import React from "react";
import {
  PiGenderFemale,
  PiGenderMale,
  PiGenderNonbinary,
} from "react-icons/pi";
import "./GenderSelection.css";

const GenderSelection = ({ onGenderSelect }) => {
  return (
    <div>
      <h1 className="title">
        Melhore Seu Foco e<br></br>
        <span className="title-span">Reduza a Ansiedade</span>
      </h1>

      <p className="subtitle">
        Sua jornada para uma vida mais equilibrada e produtiva começa agora!{" "}
        <span>
          {" "}
          Responda nosso quiz e receba dicas Personalizadas de acordo com seus
          níveis de dopamina correspondidos no resultado ao final
        </span>{" "}
        deste quiz.
      </p>

      <div className="gender-selection">
        <h3 className="gender-title">Selecione seu gênero para começar</h3>
        <div className="gender-buttons">
          <button onClick={() => onGenderSelect("Feminino")}>
            <PiGenderFemale size={50} className="icon" />
            <span>Feminino</span>
          </button>
          <button onClick={() => onGenderSelect("Masculino")}>
            <PiGenderMale size={50} className="icon" />
            <span>Masculino</span>
          </button>
          <button onClick={() => onGenderSelect("Não binário")}>
            <PiGenderNonbinary size={50} className="icon" />
            <span>Não binário</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenderSelection;
