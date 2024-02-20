import React, { useState, useEffect } from 'react';
import {
  Card, CardActions, CardContent, Button, Typography, Radio, RadioGroup, FormControlLabel,
} from '@mui/material';
import { QuizWrapper } from './styled';
import questionsData from '../../components/QuestionData/QuestionData';
import Results from '../../components/Results/Results';

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timer, setTimer] = useState(180);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0 && !quizCompleted) {
          return prevTimer - 1;
        }
        return prevTimer;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [quizCompleted]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questionsData[questionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (questionIndex === questionsData.length - 1) {
      setQuizCompleted(true);
    } else {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer('');
    }
  };

  return (
    <>
      {quizCompleted ? (
        <Results
          totalQuestions={questionsData.length}
          correctAnswers={score}
          totalTime={180 - timer}
        />
      ) : (
        <QuizWrapper>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='h6' component='div'>
               {Math.floor(timer / 60)}: {timer % 60}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
               {questionIndex + 1}/{questionsData.length}
              </Typography>
              <Typography>
                Question: {questionsData[questionIndex].question}
              </Typography>
              <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
                {questionsData[questionIndex].answers.map((answer, index) => (
                  <FormControlLabel
                    key={index}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                ))}
              </RadioGroup>
            </CardContent>
            <CardActions>
              <Button className='start' size='small' onClick={handleNextQuestion}>
                Next Question
              </Button>
            </CardActions>
          </Card>
        </QuizWrapper>
      )}
    </>
  );
};

export default Quiz;
