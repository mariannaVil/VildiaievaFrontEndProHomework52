import React, { useEffect, useState, useMemo } from 'react';
import { MainPageWrapper } from './styled';
import QuizCard from '../../components/Card/Card';
import creativeCards from '../../api/services/creativeCards';

const MainPage = ({ searchValue }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    creativeCards.get()
      .then((data) => {
        setCards(data);
        return data;
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCards = useMemo(() => {
    if (!searchValue) {
      return cards;
    }

    return cards.filter((card) => card.title.toLowerCase().includes(searchValue.toLowerCase()));
  }, [searchValue, cards]);

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
