import React from 'react';
import { ResultsWrapper } from './styled';

const Results = ({ totalQuestions, correctAnswers, totalTime }) => (
  <ResultsWrapper>
    <div>
      <h1>Congratulations!</h1>
      <p>Total Time: {totalTime} seconds</p>
      <p>Score: {correctAnswers}/{totalQuestions}</p>
    </div>
  </ResultsWrapper>
);

export default Results;
