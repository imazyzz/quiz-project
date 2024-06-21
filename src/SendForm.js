import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SendForm.css";

const SendForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const paramsObj = {};

    for (const [key, value] of queryParams.entries()) {
      paramsObj[key] = value;
    }

    if (Object.keys(paramsObj).length > 0) {
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "origin_query";
      hiddenInput.value = JSON.stringify(paramsObj);
      document.querySelector("form").appendChild(hiddenInput);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const webhookUrl =
      "https://webhook.sellflux.app/webhook/custom/lead/3d6e0d04427db110b6e8106f2cc4f25c?name=name&email=email&phone=phone";

    const leadData = {
      name: userName,
      email: email,
      telefone: phone,
      origin: "custom",
      custom_fields: {
        name: "name",
        email: "email",
        phone: "telefone",
      },
    };

    try {
      await axios.post(webhookUrl, leadData);
      onSubmit(userName);
    } catch (error) {
      console.error("Erro ao enviar dados para o webhook:", error);
    }
  };

  const handleNameChange = (e) => setUserName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    setPhone(value);
  };

  return (
    <div className="app-form">
      <h1 className="form-title">Preencha Suas Informações Abaixo</h1>
      <p className="form-subtitle">
        Receba o resultado do seu quiz + 3 ebooks totalmente gratuitos!
      </p>

      <form onSubmit={handleSubmit}>
        <label className="form-label">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userName}
          onChange={handleNameChange}
          placeholder="Digite seu nome"
          required
        ></input>
        <label className="form-label">Endereço de e-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Digite seu endereço de e-mail"
          required
        ></input>
        <label className="form-label">WhatsApp</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="(XX) XXXXX-XXXX"
          required
        />
        <button type="submit" className="form-btn">
          Receber Resultado
        </button>
      </form>
    </div>
  );
};

export default SendForm;
