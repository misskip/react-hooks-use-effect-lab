import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [isRunning, setIsRunning] = useState(true);
 
  

  // add useEffect code
  useEffect(() => {
    console.log('first render',timeRemaining)
    if (isRunning) {
    const id = window.setInterval(() => {
    setTimeRemaining(timeRemaining => timeRemaining -1 );
    }, 1000);
    return () => window.clearInterval(id);
  }
   },[isRunning]); 
  
  


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => ((handleAnswer(isCorrect) , (setIsRunning(false))))}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
      
    </>
  );
}

export default Question;
