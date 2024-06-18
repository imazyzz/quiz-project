import React, { useState } from "react";
import "./SelectableOptions.css"; // Create this CSS file for styling

const SelectableOptions = ({
  question,
  options,
  multiple,
  onSelectionChange,
  onContinue,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    let newSelectedOptions;
    if (multiple) {
      if (selectedOptions.includes(option)) {
        newSelectedOptions = selectedOptions.filter((item) => item !== option);
      } else {
        newSelectedOptions = [...selectedOptions, option];
      }
    } else {
      newSelectedOptions = [option];
    }
    setSelectedOptions(newSelectedOptions);
    onSelectionChange(newSelectedOptions);
    if (!multiple) onContinue();
  };

  return (
    <div className="selectable-options-container">
      <div className="question-header">{question}</div>
      <div className="question-multiple">
        {multiple ? "Selecione quantos quiser" : ""}
      </div>
      <div className="options-list">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option-item ${
              selectedOptions.includes(option) ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option.icon ? (
              <div className="option-icon">{option.icon}</div>
            ) : null}
            <span>{option.label}</span>
          </div>
        ))}
      </div>
      {multiple && selectedOptions.length > 0 && (
        <button className="continue-button" onClick={onContinue}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default SelectableOptions;

// import React, { useState } from "react";
// import "./SelectableOptions.css"; // Create this CSS file for styling

// const SelectableOptions = ({
//   question,
//   options,
//   multiple,
//   onSelectionChange,
//   onContinue,
// }) => {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleOptionClick = (option) => {
//     let newSelectedOptions;
//     if (multiple) {
//       if (selectedOptions.includes(option)) {
//         newSelectedOptions = selectedOptions.filter((item) => item !== option);
//       } else {
//         newSelectedOptions = [...selectedOptions, option];
//       }
//       setSelectedOptions(newSelectedOptions);
//       onSelectionChange(newSelectedOptions);
//     } else {
//       newSelectedOptions = [option];
//       setSelectedOptions(newSelectedOptions);
//       onSelectionChange(newSelectedOptions);
//       onContinue();
//     }
//   };

//   return (
//     <div className="selectable-options-container">
//       <div className="question-header">{question}</div>
//       <div className="question-multiple">
//         {multiple ? "Selecione quantos quiser" : ""}
//       </div>
//       <div className="options-list">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className={`option-item ${
//               selectedOptions.includes(option.label) ? "selected" : ""
//             }`}
//             onClick={() => handleOptionClick(option.label)}
//           >
//             {option.icon ? (
//               <div className="option-icon">{option.icon}</div>
//             ) : (
//               ""
//             )}

//             <span>{option.label}</span>
//           </div>
//         ))}
//       </div>
//       {multiple && selectedOptions.length > 0 && (
//         <button className="continue-button" onClick={onContinue}>
//           Continuar
//         </button>
//       )}
//     </div>
//   );
// };

// export default SelectableOptions;
