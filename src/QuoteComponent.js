import React from "react";
import "./QuoteComponent.css"; // Create this CSS file for styling

const QuoteComponent = ({ header, body, onQuoteComponent }) => {
  const handleYesClick = () => {
    onQuoteComponent("Yes");
  };

  const handleNoClick = () => {
    onQuoteComponent("No");
  };

  return (
    <div className="container">
      <div className="question-header2">{header}</div>
      <div className="question-body2">
        <p>{body}</p>
      </div>
      <div className="buttons" onClick={handleYesClick}>
        <div className="yes-button">
          <svg
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6 8.6L11.8 20.4 6.4 15"
              stroke="#499B92"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <button className="btn">Yes</button>
        </div>

        <div className="no-button" onClick={handleNoClick}>
          <svg
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1 9.3a1 1 0 10-1.4-1.4l1.4 1.4zM8 20.7a1 1 0 101.4 1.4l-1.4-1.4zM9.3 8a1 1 0 10-1.4 1.4l1.4-1.4zM20.7 22a1 1 0 001.4-1.4l-1.4 1.4zm0-14.2L8 20.7l1.4 1.4L22 9.3l-1.4-1.4zM8 9.3L20.7 22l1.4-1.4L9.3 8 7.9 9.3z"
              fill="#C56554"
            ></path>
          </svg>
          <button className="btn">No</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteComponent;
