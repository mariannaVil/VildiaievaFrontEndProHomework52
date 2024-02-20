import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { CardDetailsWrapper } from './styled';
import creativeCard from '../../api/services/creativeCard';

const CardDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState();
  const navigate = useNavigate();

  const handleOpenQuiz = () => navigate('/quizStart');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await creativeCard.get(id);
        setCard(data);
      } catch (error) {
        console.error('Error fetching quiz card details:', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <CardDetailsWrapper>
      {card && (
        <>
          <img src={card.image} alt={card.title} />
          <h1>{card.title}</h1>
          <p>Time Estimate: 30 minutes</p>
          <button className='quizButton' onClick={handleOpenQuiz}>Start Quiz Now</button>
        </>
      )}
    </CardDetailsWrapper>
  );
};

export default CardDetails;
