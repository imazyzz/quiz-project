import React, { useState } from "react";
import GenderSelection from "./GenderSelection";
import AgeQuestion from "./AgeQuestion";
import ProgressPage from "./ProgressPage";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import SendForm from "./SendForm";
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
          <SelectableOptions
            question="Você se sente motivado ao iniciar novas tarefas ou projetos ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 5 && (
          <SelectableOptions
          question="Você experimenta prazer e satisfação com suas atividades diárias ?"
          options={[
            { label: "Nunca", icon: <FaStar /> },
            { label: "Raramente", icon: <FaStar /> },
            { label: "Ás vezes", icon: <FaStar /> },
            { label: "Frequentemente", icon: <FaStar /> },
            { label: "Sempre", icon: <FaStar /> },
          ]}
          multiple={false}
          onSelectionChange={handleSelectionChange}
          onContinue={handleContinue}
        />
        )}
        {step === 6 && (
          <SelectableOptions
          question="Você sente necessidade de recompensas rápidas, como doces ou redes sociais, para se sentir bem ?"
          options={[
            { label: "Nunca", icon: <FaStar /> },
            { label: "Raramente", icon: <FaStar /> },
            { label: "Ás vezes", icon: <FaStar /> },
            { label: "Frequentemente", icon: <FaStar /> },
            { label: "Sempre", icon: <FaStar /> },
          ]}
          multiple={false}
          onSelectionChange={handleSelectionChange}
          onContinue={handleContinue}
          />
        )}
        {step === 7 && (
          <SelectableOptions
          question="Você se sente energizado após atividades físicas ?"
          options={[
            { label: "Nunca", icon: <FaStar /> },
            { label: "Raramente", icon: <FaStar /> },
            { label: "Ás vezes", icon: <FaStar /> },
            { label: "Frequentemente", icon: <FaStar /> },
            { label: "Sempre", icon: <FaStar /> },
          ]}
          multiple={false}
          onSelectionChange={handleSelectionChange}
          onContinue={handleContinue}
          />
        )}
        {step === 8 && (
          <SelectableOptions
          question="Você tem dificuldade em manter um humor positivo ao longo do dia ?"
          options={[
            { label: "Nunca", icon: <FaStar /> },
            { label: "Raramente", icon: <FaStar /> },
            { label: "Ás vezes", icon: <FaStar /> },
            { label: "Frequentemente", icon: <FaStar /> },
            { label: "Sempre", icon: <FaStar /> },
          ]}
          multiple={false}
          onSelectionChange={handleSelectionChange}
          onContinue={handleContinue}
          />
        )}
        {step === 9 && (
          <ProgressPage
            title="Avaliação do nível de atenção"
            undertitle={
              <>
                O próximo grupo de perguntas irá ajudar a entender o seu nível de atenção.
                <br />
                <strong>Pronto para continuar?</strong>
              </>
            }
            image={atitude}
            onContinue={handleContinue}
          />
        )}
        {step === 10 && (
          <SelectableOptions
            question="Você consegue manter o foco em uma tarefa por um longo período ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
            { label: "Raramente", icon: <FaStar /> },
            { label: "Ás vezes", icon: <FaStar /> },
            { label: "Frequentemente", icon: <FaStar /> },
            { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 11 && (
          <SelectableOptions
            question="Você se distrai facilmente em ambientes barulhentos ou movimentados ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 12 && (
          <SelectableOptions
            question="Você sente dificuldade em finalizar tarefas importantes ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
         {step === 13 && (
          <SelectableOptions
            question="Você procrastina frequentemente tarefas que considera difíceis ou tediosas ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
         {step === 14 && (
          <SelectableOptions
            question="Você tem facilidade em se concentrar em um único projeto por várias horas ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 15 && (
          <ProgressPage
            title="Ótimo trabalho até agora"
            undertitle="Você está indo bem. A próxima parte do questionário se concentrará no seu nível de anseidade."
            image={great}
            onContinue={handleContinue}
          />
        )}

        {step === 16 && (
          <SelectableOptions
            question="Você se sente ansioso ou preocupado com frequência?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 17 && (
          <SelectableOptions
            question="Você tem dificuldade para relaxar e se desligar das preocupações diárias ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 18 && (
          <SelectableOptions
            question="Você experimenta sintomas físicos de ansiedade, como palpitações ou sudorese ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 19 && (
          <SelectableOptions
            question="Você sente que sua ansiedade interfere nas suas atividades diárias ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 20 && (
          <SelectableOptions
            question="Você consegue manter a calma em situações de estresse ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}

        {step === 21 && (
          <ProgressPage
            title="Quase Lá!"
            undertitle="Agora, vamos nos aprofundar em seu estilo de vida para elaborar um plano que se adapte perfeitamente a você!"
            subtitle="Obrigado por ser honesto. Cada resposta que você dá nos ajuda a personalizar seu plano"
            image={almost}
            onContinue={handleContinue}
          />
        )}

        {step === 22 && (
          <SelectableOptions
            question="Você pratica atividades físicas regularmente ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 23 && (
          <SelectableOptions
            question="Você mantém uma alimentação equilibrada e saudável ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}
        {step === 24 && (
          <SelectableOptions
            question="Você dedica tempo para hobbies ou atividades que gosta ?"
            options={[
              { label: "Nunca", icon: <FaStar /> },
              { label: "Raramente", icon: <FaStar /> },
              { label: "Ás vezes", icon: <FaStar /> },
              { label: "Frequentemente", icon: <FaStar /> },
              { label: "Sempre", icon: <FaStar /> },
            ]}
            multiple={false}
            onSelectionChange={handleSelectionChange}
            onContinue={handleContinue}
          />
        )}

        {step === 25 && (
          <SelectableOptions
          question="Você sente que tem um bom equilíbrio entre trabalho e vida pessoal ?"
          options={[
            { label: "Nunca", icon: <FaStar /> },
            { label: "Raramente", icon: <FaStar /> },
            { label: "Ás vezes", icon: <FaStar /> },
            { label: "Frequentemente", icon: <FaStar /> },
            { label: "Sempre", icon: <FaStar /> },
          ]}
          multiple={false}
          onSelectionChange={handleSelectionChange}
          onContinue={handleContinue}
          />
        )}
        {step === 26 && (
          <SelectableOptions
          question="Você dorme bem e acorda sentindo-se descansado ?"
          options={[
            { label: "Nunca", icon: <FaStar /> },
            { label: "Raramente", icon: <FaStar /> },
            { label: "Ás vezes", icon: <FaStar /> },
            { label: "Frequentemente", icon: <FaStar /> },
            { label: "Sempre", icon: <FaStar /> },
          ]}
          multiple={false}
          onSelectionChange={handleSelectionChange}
          onContinue={handleContinue}
          />
        )}

        {step === 27 && (
          <ProgressPage
            title="Você conseguiu!"
            subtitle="dos usuários com respostas semelhantes melhoraram sua autodisciplina, e você também pode"
            image={gotThis}
            onContinue={handleContinue}
          />
        )}
        {step === 28 && (
          <ProgressPage
            title="Pronto para ver seu plano?"
            subtitle="Sabemos que às vezes as coisas ficam complicadas, por isso projetamos o Dopamina dolares para funcionar com apenas 5 minutos do seu tempo dedicado a ele todos os dias! Pequenas mudanças levam a grandes resultados"
            image={power}
            onContinue={handleContinue}
          />
        )}
        {step === 29 && <SendForm />}
      </div>
    </div>
  );
}

export default App;
