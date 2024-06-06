// ResultMessage.js
import React from "react";
import "./ResultMessage.css";

const ResultMessage = ({ result, userName }) => {
  const getMessage = (result) => {
    switch (result) {
      case "Baixos Níveis de Dopamina":
        return (
          <>
            <p>Parabéns {userName},</p>
            <p>
              <p>
                Em até 5 minutos você receberá os seus 3 ebooks gratuitos para
                auxiliar nessa jornada. Confira seu resultado abaixo:
              </p>
              Com base nas suas respostas, parece que você está enfrentando
              baixos níveis de dopamina. Isso pode estar afetando sua motivação,
              prazer nas atividades diárias e satisfação geral. Aqui estão
              algumas dicas práticas para aumentar seus níveis de dopamina
              naturalmente:
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
            <p>
              Experimente essas estratégias e veja como elas podem melhorar sua
              motivação e bem-estar. Se precisar de mais orientação, nosso curso
              DopaminaDólares oferece um programa completo para transformar sua
              vida.
            </p>
          </>
        );
      case "Baixos Níveis de Atenção":
        return (
          <>
            <p>Parabéns {userName},</p>

            <p>
              Em até 5 minutos você receberá os seus 3 ebooks gratuitos para
              auxiliar nessa jornada. Confira seu resultado abaixo:
            </p>
            <p>
              Pelas suas respostas, notamos que você pode estar enfrentando
              dificuldades com concentração e foco. Aqui estão algumas sugestões
              para melhorar sua atenção:
            </p>
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
            <p>
              Implementando essas dicas, você deve notar uma melhora
              significativa na sua capacidade de concentração. Para mais
              estratégias detalhadas, considere nosso curso DopaminaDólares.
            </p>
          </>
        );
      case "Altos Níveis de Ansiedade":
        return (
          <>
            <p>Parabéns {userName},</p>

            <p>
              Em até 5 minutos você receberá os seus 3 ebooks gratuitos para
              auxiliar nessa jornada. Confira seu resultado abaixo:
            </p>
            <p>
              Pelas suas respostas, parece que você está lidando com níveis
              elevados de ansiedade. Isso pode impactar sua capacidade de
              relaxar e aproveitar a vida. Aqui estão algumas dicas para ajudar
              a reduzir sua ansiedade:
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
            <p>
              Essas estratégias podem ajudar a reduzir sua ansiedade e melhorar
              sua qualidade de vida. Nosso curso DopaminaDólares oferece mais
              técnicas e ferramentas para controlar a ansiedade de forma eficaz.
            </p>
          </>
        );
      case "Comportamentos Saudáveis":
        return (
          <>
            <p>Parabéns {userName},</p>

            <p>
              Em até 5 minutos você receberá os seus 3 ebooks gratuitos para
              auxiliar nessa jornada. Confira seu resultado abaixo:
            </p>
            <p>
              Parabéns! Suas respostas indicam que você já pratica muitos
              comportamentos saudáveis. Isso é excelente para manter bons níveis
              de dopamina, atenção e reduzir a ansiedade. Aqui estão algumas
              sugestões adicionais para continuar melhorando:
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
            <p>
              Você está no caminho certo! Continue assim e, se quiser aprofundar
              seu conhecimento, nosso curso DopaminaDólares pode oferecer mais
              insights valiosos.
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

      <a href="#" className="btn-result">
        Conheça o Dopamina Dólares
      </a>
    </div>
  );
};

export default ResultMessage;
