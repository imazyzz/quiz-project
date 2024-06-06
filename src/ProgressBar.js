import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentStep }) => {
  // const totalSteps = 30; // Total de steps no quiz
  const steps = [2, 9, 15, 18, 21, 30];
  // const stepIntervals = totalSteps / (steps.length - 1);

  return (
    <div className="progress-bar">
      {steps.map((step, index) => {
        const isFilled = currentStep >= step;
        let lineWidth = 0;

        if (currentStep > step) {
          if (index < steps.length - 1) {
            const nextStep = steps[index + 1];
            const progressBetweenSteps = nextStep - step;
            const currentProgress = currentStep - step;

            lineWidth = (currentProgress / progressBetweenSteps) * 100;
            if (currentStep >= nextStep) {
              lineWidth = 100;
            }
          }
        }

        return (
          <React.Fragment key={step}>
            <div
              className={`progress-circle ${isFilled ? "filled" : ""}`}
            ></div>
            {index < steps.length - 1 && (
              <div className="progress-line-container">
                <div
                  className="progress-line"
                  style={{
                    width: `${lineWidth}%`,
                  }}
                ></div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;
