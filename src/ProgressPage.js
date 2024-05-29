import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./ProgressPage.css";

const ProgressPage = ({
  title,
  undertitle,
  subtitle,
  image,
  onContinue,
  isLoading,
}) => {
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(onContinue, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onContinue]);

  return (
    <div className="progress-page">
      <h1>{title}</h1>
      <p className="progress-text">{undertitle}</p>
      <div className="progress-content">
        {isLoading ? (
          <div className="loading-circle"></div> // Adiciona o círculo de carregamento
        ) : (
          <img src={image} alt="Progress" className="progress-img" />
        )}
        <p className="progress-text">{subtitle}</p>
      </div>
      {isLoading ? (
        ""
      ) : (
        <button className="continue-button" onClick={onContinue}>
          Continuar
        </button>
      )}
    </div>
  );
};

ProgressPage.propTypes = {
  title: PropTypes.string.isRequired,
  undertitle: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired, // Aqui mudamos para node
  image: PropTypes.string.isRequired,
  onContinue: PropTypes.func.isRequired,
};

ProgressPage.propTypes = {
  title: PropTypes.string.isRequired,
  undertitle: PropTypes.node, // Aqui mudamos para node
  subtitle: PropTypes.node, // Aqui mudamos para node
  image: PropTypes.string,
  onContinue: PropTypes.func.isRequired,
  isLoading: PropTypes.bool, // Nova prop para indicar se está carregando
};

export default ProgressPage;
