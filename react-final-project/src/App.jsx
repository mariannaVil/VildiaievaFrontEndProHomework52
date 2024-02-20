import React, { useState } from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Templates from './components/Templates/Templates';
import NotFound from './pages/NotFound/NotFound';
import MainPage from './pages/MainPage/MainPage';
import QuizRoutes from './components/Routes/QuizRoutes';
import CardDetails from './pages/CardDetails/CardDetails';
import Quiz from './pages/Quiz/Quiz';

function App() {
  const [searchValue, setsearchValue] = useState('');

  const handleInputChange = (event) => {
    setsearchValue(event.target.value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route element={<Templates handleInputChange={handleInputChange} />}>
          <Route path='/' element={<MainPage searchValue={searchValue} />} />
          <Route path='/quizCards/:id' element={<CardDetails />} />
          <Route path='/quizStart' element={<Quiz />} />
          <Route path='/quiz/*' element={<QuizRoutes />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
