import React from "react";
import "./SendForm.css";

const SendForm = () => {
  return (
    <div className="app-form">
      <h1 className="form-title">Preencha suas informações abaixo</h1>
      <p className="form-subtitle">
        Receba o resultado do seu quiz + 3 ebooks totalmente gratuitos!
      </p>

      <form action="" method="post">
        <label className="form-label">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          required
        ></input>
        <label className="form-label">Endereço de e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu endereço de e-mail"
          required
        ></input>
        <label className="form-label">WhatsApp</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          pattern="\(\d{2}\) \d{5}-\d{4}"
          placeholder="(XX) XXXXX-XXXX"
          required
        />
        <button type="submit" className="form-btn">
          Receber Ebooks
        </button>
      </form>
    </div>
  );
};

export default SendForm;
