import React, { useEffect, useMemo } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { MainPageWrapper } from './styled';
import QuizCard from '../../components/Card/Card';
import { quizesThunk } from '../../store/sources/quizes';

const MainPage = () => {
  const { cards, loading, filter } = useSelector((state) => state.quizesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(quizesThunk.fetchData());
  }, [dispatch]);

  const filteredCards = useMemo(() => {
    if (!filter) {
      return cards;
    }

    return cards.filter((card) => card.title.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, cards]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <MainPageWrapper>
      {filteredCards.map((card) => (
        <QuizCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </MainPageWrapper>
  );
};
export default MainPage;
