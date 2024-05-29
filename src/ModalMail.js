import React from "react";
import "./ModalMail.css";

const ModalMail = () => {
  return (
    <div className="bg-modal">
      <div className="modal-container">
        <div className="modal-title">
          <h1>
            Digite o seu email para ganhar o seu<br></br>{" "}
            <span className="modal-span">Plano Anti-Burnout</span>
          </h1>
          <form action="" method="post" className="modal-form">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite o seu e-mail"
            />
            <div className="security">
              <svg
                width="10"
                height="13"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.3 4.9h.4c.7 0 1.3.5 1.3 1.2v5.7c0 .7-.6 1.2-1.3 1.2H1.3C.6 13 0 12.5 0 11.8V6c0-.7.6-1.2 1.3-1.2h.4V3.2C1.7 1.6 3.2 0 5 0c1.8 0 3.3 1.5 3.3 3.3v1.6zM5 1C3.8 1 2.8 2 2.8 3.2V5h4.4V3.2c0-1.1-1-2.1-2.2-2.1z"
                  fill="#8555D7"
                ></path>
              </svg>
              <p className="security-text">
                Respeitamos a sua privacidade e estamos empenhados em proteger
                os seus dados pessoais. Enviaremos a você por e-mail uma cópia
                de seus resultados para acesso conveniente.
              </p>
            </div>
            <button type="submit">Continuar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalMail;
