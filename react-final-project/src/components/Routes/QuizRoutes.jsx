import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorite from '../../pages/Favorite/Favorite';
import AddNewQuiz from '../../pages/AddNewQuiz/AddNewQuiz';

const QuizRoutes = () => (
  <Routes>
    <Route path='/create' element={<AddNewQuiz />} />
    <Route path='/favorite' element={<Favorite />} />
  </Routes>
);
export default QuizRoutes;
