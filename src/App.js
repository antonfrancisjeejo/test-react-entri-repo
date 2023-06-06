import React, { useState } from "react";
import questions from "./data";
import "./App.css";

const App = () => {
  //to display the current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //to either show questions or scoreboard
  const [showScore, setShowScore] = useState(false);
  //to track score
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore((currScore) => currScore + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-container">
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
          <button onClick={restart}>Restart</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
            <div>
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
