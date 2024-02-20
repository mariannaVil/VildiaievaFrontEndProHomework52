import {
  Card, CardActions, CardContent, CardMedia, Button, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardWrapper, DescriptionTypography } from './styled';
import QuizModal from '../Modals/QuizModal';
import BaseModal from '../Modals/BaseModal';

const QuizCard = ({
  id, image, title, description,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => navigate(`/quizCards/${id}`);
  const handleShowClick = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <CardWrapper>
        <Card>
          <CardMedia
           sx={{
             height: 150,
             '@media (max-width: 600px)': {
               height: 100,
             },
           }}
            image={image}
            title={title}
            description={description}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <DescriptionTypography variant='body2' color='text.secondary'>
              {description}
            </DescriptionTypography>
          </CardContent>
          <CardActions>
            <Button className='start' size='small' onClick={handleStartClick}>
              Start quiz
            </Button>
            <Button className='show' size='small' onClick={handleShowClick}>
              Show More
            </Button>
          </CardActions>
        </Card>
      </CardWrapper>
      <QuizModal isOpen={openModal} handleClose={handleClose}>
        <BaseModal
          image={image}
          title={title}
          description={description}
        />
      </QuizModal>
    </>
  );
};
export default QuizCard;
