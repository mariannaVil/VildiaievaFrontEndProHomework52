import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { StyledSidebarWrapper, StyledFieldWrapper, StyledLink } from './styled';
import { quizesAction } from '../../store/sources/quizes';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(quizesAction.filterAction(event.target.value));
  };
  return (
    <StyledSidebarWrapper>
    <StyledFieldWrapper>
      <TextField
        fullWidth
        variant='outlined'
        label='Search Quiz'
        placeholder='Search...'
        onChange={handleInputChange}
      />
    </StyledFieldWrapper>
    <StyledLink to={'/'}>Home Page</StyledLink>
    <StyledLink to={'/quiz/create'}>Add new Quiz</StyledLink>
    <StyledLink to={'/quiz/favorite'}>Favorite</StyledLink>
  </StyledSidebarWrapper>
  );
};
export default Sidebar;
