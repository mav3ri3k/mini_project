"use client";

import React, { useState } from "react";

const questions = [
  {
    question: "What color light means stop?",
    options: ["Red", "Green", "Yellow"],
    answer: "Red",
  },
  {
    question: "What does a stop sign tell you to do?",
    options: ["Slow down", "Come to a complete stop", "Change lanes"],
    answer: "Come to a complete stop",
  },
  {
    question: "Is it okay to use your phone while driving?",
    options: ["Yes, if you use hands-free", "Yes, for short calls", "No"],
    answer: "No",
  },
  {
    question: "What should you do when approaching a school zone?",
    options: ["Maintain speed", "Slow down", "Honk your horn"],
    answer: "Slow down",
  },
  {
    question: "What does a yield sign tell you to do?",
    options: ["Stop completely", "Merge with caution", "Ignore other vehicles"],
    answer: "Merge with caution",
  },
];

function TrafficQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null),
  );

  const handleOptionChange = (event) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = event.target.value;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setScore(
      selectedAnswers.filter((answer) =>
        answer === questions[currentQuestion].answer
      ).length,
    );
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Call handleSubmit on reaching last question
      handleSubmit();
      setCurrentQuestion(currentQuestion + 1); // Move to results after submit
    }
  };

  const renderQuestion = () => {
    const current = questions[currentQuestion];
    return (
      <>
        <div class="flex flex-col">
          <h2 class="font-bold text-xl pb-2">{current.question}</h2>
          {current.options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={option}
                value={option}
                onChange={handleOptionChange}
                checked={selectedAnswers[currentQuestion] === option}
              />
              <label htmlFor={option} class="pl-2">{option}</label>
            </div>
          ))}
          <button onClick={handleNextQuestion}>
            {currentQuestion === questions.length - 1
              ? "See Results"
              : "Next Question"}
          </button>
        </div>
      </>
    );
  };

  const renderResults = () => {
    return (
      <div class="flex flex-col">
        <h2 class="font-bold text-xl pb-2">
          You scored {score} out of {questions.length}!
        </h2>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  };

  return (
    <>
      <section>
        {currentQuestion === questions.length || score > 0
          ? renderResults()
          : renderQuestion()}
      </section>
    </>
  );
}

export default TrafficQuiz;
