import React from 'react';
import { TextField } from '@mui/material';
import { StyledSidebarWrapper, StyledFieldWrapper, StyledLink } from './styled';

const Sidebar = ({ handleInputChange }) => (
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
export default Sidebar;
