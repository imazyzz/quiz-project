import React, { useState } from "react";
import GenderSelection from "./GenderSelection";
import AgeQuestion from "./AgeQuestion";
import ProgressPage from "./ProgressPage";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import "./App.css";
import QuoteComponent from "./QuoteComponent";
import SelectableOptions from "./SelectableOptions";
import ninety from "./images/ninety.webp";
import atitude from "./images/atitude.webp";
import great from "./images/great-job.webp";
import almost from "./images/almost.89489eb9422adf3186ae.webp";
import habits from "./images/habits.cc39320a45ee8b5d463b.webp";
import gotThis from "./images/got_this.46c739f11ad2bc0f8902.webp";
import power from "./images/willpower.96f0924c2e52b676557f.webp";
import loading from "./images/—Pngtree—image icon - vector loading_4979442.png";
import { FaStar } from "react-icons/fa";

function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 30;

  const handleBackButtonClick = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleGenderSelect = (gender) => {
    console.log(`Gênero selecionado: ${gender}`);
    setStep(2);
  };

  const handleAgeSubmit = (age) => {
    console.log(`Idade selecionada: ${age}`);
    setStep(4);
  };

  const handleQuoteComponent = (answer) => {
    console.log(`Resposta selecionada: ${answer}`);
    setStep(step + 1);
  };

  // FUNCIONAMENTO DO SELECT VÁRIOS

  const handleSelectionChange = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
  };

  const handleContinue = () => {
    console.log("Continuar...");
    setStep(step + 1); // Incrementa o passo
  };

  return (
    <div className="App">
      <div className="container">
        <Header
          curStep={step}
          totStep={totalSteps}
          onBackButtonClick={handleBackButtonClick}
        />
        <ProgressBar currentStep={step} />
        {step === 1 && <GenderSelection onGenderSelect={handleGenderSelect} />}
        {step === 2 && (
          <ProgressPage
            title="Estamos orgulhosos de você!"
            subtitle={
              <>
                das pessoas ainda não começaram sua jornada de
                autoaperfeiçoamento, portanto,{" "}
                <strong>você já está um passo à frente</strong>
              </>
            }
            image={ninety}
            onContinue={handleContinue}
          />
        )}
        {step === 3 && <AgeQuestion onAgeSubmit={handleAgeSubmit} />}
        {step === 4 && (
          <QuoteComponent
            header="A afirmação abaixo caracteriza você?"
            body="Quando tenho algo difícil para fazer, digo a mim mesmo que é melhor
          esperar até me sentir mais inspirado"
            onQuoteComponent={handleQuoteComponent}
          />
        )}
        {step === 5 && (
          <QuoteComponent
            header="A afirmação abaixo caracteriza você?"
            body="Passo mais tempo preocupado em fazer uma tarefa do que realmente fazê-la"
            onQuoteComponent={handleQuoteComponent}
          />
        )}
        {step === 6 && (
          <QuoteComponent
            header="A afirmação abaixo caracteriza você?"
            body="Começo muitos projetos novos, mas raramente os termino por falta de foco"
            onQuoteComponent={handleQuoteComponent}
          />
        )}
        {step === 7 && (
          <QuoteComponent
            header="A afirmação abaixo caracteriza você?"
            body="No fundo, sinto-me muito ansioso por falhar nas minhas tarefas"
            onQuoteComponent={handleQuoteComponent}
          />
        )}
        {step === 8 && (
          <ProgressPage
            title="Vejamos sua atitude"
            undertitle={
              <>
                O próximo grupo de perguntas irá aprofundar suas atitudes e
                crenças pessoais.
                <br />
                <strong>Pronto para continuar?</strong>
              </>
            }
            image={atitude}
            onContinue={handleContinue}
          />
        )}
        {step === 9 && (
          <SelectableOptions
            question="O Quão Distraído Você é?"
            options={[
              { label: "Facilmente distraído", icon: <FaStar /> },
              { label: "Às vezes perde o foco", icon: <FaStar /> },
              { label: "Raramente perde o foco", icon: <FaStar /> },
              { label: "Sempre Muito Focado", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 10 && (
          <SelectableOptions
            question="O que você costuma fazer quando está estressado ou sobrecarregado?"
            options={[
              { label: "Come para se sentir bem", icon: <FaStar /> },
              { label: "Passa horas nas redes sociais", icon: <FaStar /> },
              { label: "Se afastar de pessoas", icon: <FaStar /> },
              { label: "Dormir muito", icon: <FaStar /> },
              { label: "Outros", icon: <FaStar /> },
            ]}
            multiple={true}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 11 && (
          <SelectableOptions
            question="Qual é a melhor maneira de garantir que você siga sua rotina diária?"
            options={[
              { label: "Fazer um checklist", icon: <FaStar /> },
              { label: "Usar Alarmes", icon: <FaStar /> },
              { label: "Visualizar o sucesso", icon: <FaStar /> },
              { label: "Se Recompensar", icon: <FaStar /> },
              { label: "Usar um aplicativo de hábitos", icon: <FaStar /> },
              { label: "Outros", icon: <FaStar /> },
            ]}
            multiple={true}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 12 && (
          <ProgressPage
            title="Ótimo trabalho até agora"
            undertitle="Você está indo bem. A próxima parte do questionário se concentrará no bem-estar mental geral. Manter um estado mental saudável é vital para ajudar a superar a procrastinação"
            image={great}
            onContinue={handleContinue}
          />
        )}

        {step === 13 && (
          <SelectableOptions
            question="Com que frequência você se sente estressado ou ansioso?"
            options={[
              { label: "Nunca" },
              { label: "As vezes" },
              { label: "Com frequência" },
              { label: "O tempo todo" },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 14 && (
          <SelectableOptions
            question="Como você avaliaria seu nível geral de felicidade?"
            options={[
              { label: "Muito Infeliz" },
              { label: "Um pouco infeliz" },
              { label: "Um pouco feliz" },
              { label: "Muito feliz" },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 15 && (
          <SelectableOptions
            question="Você acha difícil relaxar?"
            options={[
              { label: "Nunca" },
              { label: "As vezes" },
              { label: "Com frequência" },
              { label: "O tempo todo" },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 16 && (
          <SelectableOptions
            question="Como você avaliaria sua autoestima?"
            options={[
              { label: "Muito alta" },
              { label: "Alta" },
              { label: "Baixa" },
              { label: "Muito baixa" },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 17 && (
          <SelectableOptions
            question="Quanto tempo você gasta se preocupando com coisas que não pode controlar?"
            options={[
              { label: "Nenhum" },
              { label: "Pouco tempo" },
              { label: "Muito tempo" },
              { label: "O tempo inteiro" },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}

        {step === 18 && (
          <ProgressPage
            title="Quase Lá!"
            undertitle="Agora, vamos nos aprofundar em seu estilo de vida para elaborar um plano que se adapte perfeitamente a você!"
            subtitle="Obrigado por ser honesto. Cada resposta que você dá nos ajuda a personalizar seu plano"
            image={almost}
            onContinue={handleContinue}
          />
        )}

        {step === 19 && (
          <SelectableOptions
            question="Há algum hábito que você gostaria de abandonar?"
            options={[
              { label: "Fumar", icon: <FaStar /> },
              { label: "Beber Bebidas Alcólicas", icon: <FaStar /> },
              { label: "Fast-foods", icon: <FaStar /> },
              { label: "Falta de sono", icon: <FaStar /> },
              { label: "Falta de planejamento", icon: <FaStar /> },
              { label: "Redes sociais", icon: <FaStar /> },
              { label: "Roer unhas", icon: <FaStar /> },
              { label: "Duvidar da sua capacidade", icon: <FaStar /> },
              { label: "Maratonar séries", icon: <FaStar /> },
            ]}
            multiple={true}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 20 && (
          <SelectableOptions
            question="O que você acha que o impede de viver a vida que deseja?"
            options={[
              { label: "Hábtios Não Saudáveis", icon: <FaStar /> },
              { label: "Autocrítica", icon: <FaStar /> },
              { label: "Medo de falhar", icon: <FaStar /> },
              { label: "Falta de suporte", icon: <FaStar /> },
              { label: "Falta de motivação", icon: <FaStar /> },
              { label: "Outros", icon: <FaStar /> },
            ]}
            multiple={true}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 21 && (
          <SelectableOptions
            question="Imagine sua vida sem distrações. Como você se sentiria"
            options={[
              { label: "Feliz", icon: <FaStar /> },
              { label: "Produtivo", icon: <FaStar /> },
              { label: "Confiante", icon: <FaStar /> },
              { label: "Com propósito", icon: <FaStar /> },
              { label: "Saudável", icon: <FaStar /> },
              { label: "Calmo", icon: <FaStar /> },
              { label: "Outros", icon: <FaStar /> },
            ]}
            multiple={true}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}

        {step === 22 && (
          <ProgressPage
            title="Novos hábitos, nova vida"
            undertitle="Baseado na ciência comportamental, Habio tornará o processo de construção de hábitos fácil e agradável."
            subtitle="Comece a fazer mudanças para viver a vida que você deseja"
            image={habits}
            onContinue={handleContinue}
          />
        )}
        {step === 23 && (
          <ProgressPage
            title="Processando suas respostas"
            subtitle="Estamos analisando seus padrões de comportamento para criar o plano perfeito para você. Apenas algumas perguntas e nós teremos que precisamos para finalizar o seu plano"
            image={loading}
            onContinue={handleContinue}
            isLoading={true}
          />
        )}

        {step === 24 && (
          <ProgressPage
            title="Você conseguiu!"
            subtitle="dos usuários com respostas semelhantes melhoraram sua autodisciplina, e você também pode"
            image={gotThis}
            onContinue={handleContinue}
          />
        )}

        {step === 25 && (
          <SelectableOptions
            question="Você está feliz com sua situação de vida atual?"
            options={[
              { label: "Muito Infeliz" },
              { label: "Um pouco infeliz" },
              { label: "Um pouco feliz" },
              { label: "Muito feliz" },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 26 && (
          <SelectableOptions
            question="Quão disposto você está a fazer mudanças para melhorar sua vida?"
            options={[
              { label: "Muito Indispoto" },
              { label: "Pouco disposto" },
              { label: "Disposto" },
              { label: "Muito Disposto" },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 27 && (
          <SelectableOptions
            question="O que você deseja alcançar após 30 dias do plano personalizado da Dopamina Dolares"
            options={[
              { label: "Performar mais no trabalho" },
              { label: "Me tornar mais organizado" },
              { label: "Reduzir comportamento impulsivo" },
              { label: "Melhorar a concentração" },
              { label: "Melhor a saúde mental" },
              { label: "Melhorar nos relacionamentos" },
              { label: "Diminuir pensamentos negativos" },
              { label: "Parar com hábitos negativos" },
              { label: "Outros" },
            ]}
            multiple={true}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}

        {step === 28 && (
          <SelectableOptions
            question="Para melhorar essencialmente sua rotina no longo prazo, quanto tempo você está disposto a investir hoje?"
            options={[
              { label: "5 minutos por dia" },
              { label: "10 minutos por dia" },
              { label: "15 minutos por dia" },
              { label: "20+ minutos por dia" },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}

        {step === 29 && (
          <ProgressPage
            title="Pronto para ver seu plano?"
            subtitle="Sabemos que às vezes as coisas ficam complicadas, por isso projetamos o Dopamina dolares para funcionar com apenas 5 minutos do seu tempo dedicado a ele todos os dias! Pequenas mudanças levam a grandes resultados"
            image={power}
            onContinue={handleContinue}
          />
        )}
        {step === 30 && (
          <ProgressPage
            title="Pronto para ver seu plano?"
            subtitle="Sabemos que às vezes as coisas ficam complicadas, por isso projetamos o Dopamina dolares para funcionar com apenas 5 minutos do seu tempo dedicado a ele todos os dias! Pequenas mudanças levam a grandes resultados"
            image={power}
            onContinue={handleContinue}
          />
        )}
      </div>
    </div>
  );
}

export default App;
