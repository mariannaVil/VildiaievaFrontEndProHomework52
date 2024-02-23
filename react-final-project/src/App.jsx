import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Templates from './components/Templates/Templates';
import NotFound from './pages/NotFound/NotFound';
import MainPage from './pages/MainPage/MainPage';
import QuizRoutes from './components/Routes/QuizRoutes';
import CardDetails from './pages/CardDetails/CardDetails';
import Quiz from './pages/Quiz/Quiz';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NotFound />} />
          <Route element={<Templates />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/quizCards/:id' element={<CardDetails />} />
            <Route path='/quizStart' element={<Quiz />} />
            <Route path='/quiz/*' element={<QuizRoutes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
