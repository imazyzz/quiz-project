// ResultMessage.js
import React from "react";
import "./ResultMessage.css";

const ResultMessage = ({ result, userName }) => {
  const getMessage = (result) => {
    switch (result) {
      case "Baixos Níveis de Dopamina":
        return (
          <>
            <p className="congrats">
              Confira seu resultado abaixo, {userName}:
            </p>
            <p>
              Com base nas suas respostas, parece que você está enfrentando
              <span className="congrats"> baixos níveis de dopamina.</span> Isso
              pode estar afetando sua motivação, prazer nas atividades diárias e
              satisfação geral.
            </p>

            <p>
              Aqui estão algumas dicas práticas para aumentar seus níveis de
              dopamina naturalmente:
            </p>
            <ul>
              <li>
                Exercício Regular: Atividades físicas, especialmente aeróbicas,
                podem aumentar a produção de dopamina.
              </li>
              <li>
                Alimentação Saudável: Inclua alimentos ricos em tirosina, como
                bananas, abacates e amêndoas.
              </li>
              <li>
                Meditação e Relaxamento: Práticas de mindfulness podem ajudar a
                equilibrar seus níveis de dopamina.
              </li>
              <li>
                Estabeleça Metas e Recompensas: Pequenas metas diárias e
                recompensas podem estimular a produção de dopamina.
              </li>
            </ul>
            <p className="congrats">
              Em até 5 minutos, você receberá gratuitamente 10 dicas para
              aumentar sua dopamina e energia de forma natural, além de um
              e-book sobre o Maestro da Mente, a Dopamina
            </p>
          </>
        );
      case "Baixos Níveis de Atenção":
        return (
          <>
            <p className="congrats">
              Confira seu resultado abaixo, {userName}:
            </p>

            <p>
              Pelas suas respostas, notamos que você pode estar enfrentando
              <span className="congrats">
                dificuldades com concentração e foco.
              </span>
            </p>

            <p>Aqui estão algumas sugestões para melhorar sua atenção:</p>
            <ul>
              <li>
                Ambiente de Trabalho Organizado: Reduza as distrações ao seu
                redor para aumentar seu foco.
              </li>
              <li>
                Técnicas de Pomodoro: Use a técnica Pomodoro para dividir seu
                tempo em blocos de trabalho focado e intervalos curtos.
              </li>
              <li>
                Descanso Adequado: Garantir um sono de qualidade é essencial
                para manter a concentração.
              </li>
              <li>
                Exercícios de Atenção Plena: Práticas de mindfulness podem
                ajudar a melhorar seu foco e atenção.
              </li>
            </ul>
            <p className="congrats">
              Em até 5 minutos, você receberá gratuitamente 10 dicas para
              aumentar sua dopamina e energia de forma natural, além de um
              e-book sobre o Maestro da Mente, a Dopamina
            </p>
          </>
        );
      case "Altos Níveis de Ansiedade":
        return (
          <>
            <p className="congrats">
              Confira seu resultado abaixo, {userName}:
            </p>

            <p>
              Pelas suas respostas, parece que você está lidando com{" "}
              <span className="congrats">níveis elevados de ansiedade.</span>{" "}
            </p>

            <p>
              Isso pode impactar sua capacidade de relaxar e aproveitar a vida.
              Aqui estão algumas dicas para ajudar a reduzir sua ansiedade:
            </p>
            <ul>
              <li>
                Práticas de Relaxamento: Inclua atividades como ioga, meditação
                ou técnicas de respiração em sua rotina diária.
              </li>
              <li>
                Exercício Físico Regular: Atividades físicas podem ajudar a
                liberar tensões e reduzir a ansiedade.
              </li>
              <li>
                Limite de Cafeína e Açúcar: Reduzir a ingestão de cafeína e
                açúcar pode ajudar a manter níveis de ansiedade mais baixos.
              </li>
              <li>
                Converse com Alguém: Compartilhar suas preocupações com amigos,
                familiares ou um terapeuta pode ser muito benéfico.
              </li>
            </ul>
            <p className="congrats">
              Em até 5 minutos, você receberá gratuitamente 10 dicas para
              aumentar sua dopamina e energia de forma natural, além de um
              e-book sobre o Maestro da Mente, a Dopamina
            </p>
          </>
        );
      case "Comportamentos Saudáveis":
        return (
          <>
            <p className="congrats">
              Confira seu resultado abaixo, {userName}:
            </p>

            <p>
              Parabéns! Suas respostas indicam que você já pratica muitos
              comportamentos saudáveis. Isso é excelente para manter bons níveis
              de dopamina, atenção e reduzir a ansiedade.
            </p>

            <p>
              Aqui estão algumas sugestões adicionais para continuar melhorando:
            </p>

            <ul>
              <li>
                Aprimore Suas Práticas Atuais: Experimente novas formas de
                exercício ou técnicas de meditação para manter-se motivado.
              </li>
              <li>
                Desafios Pessoais: Defina novos desafios pessoais ou
                profissionais para continuar estimulando seu cérebro.
              </li>
              <li>
                Aprendizado Contínuo: Mantenha-se atualizado com novas técnicas
                e informações sobre saúde mental e bem-estar.
              </li>
              <li>
                Participe de Comunidades: Engaje-se em comunidades ou grupos de
                interesse para compartilhar experiências e aprender com outros.
              </li>
            </ul>
            <p className="congrats">
              Em até 5 minutos, você receberá gratuitamente 10 dicas para
              aumentar sua dopamina e energia de forma natural, além de um
              e-book sobre o Maestro da Mente, a Dopamina
            </p>
          </>
        );
      default:
        return "Erro ao calcular resultado.";
    }
  };

  return (
    <div className="ResultMessage">
      {getMessage(result)}

      <a href="https://www.dopaminadolares.com.br" className="btn-result">
        Transforme Sua Ansiedade
      </a>
    </div>
  );
};

export default ResultMessage;
