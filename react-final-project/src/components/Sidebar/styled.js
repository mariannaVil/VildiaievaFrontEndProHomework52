import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSidebarWrapper = styled.div`
  background: #ACCCFF;
  padding-top: 30px;
  height: 100%;
  padding-left: 20px;
`;

export const StyledFieldWrapper = styled.div`
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 25px;
  font-style: italic;
  text-decoration: none;
  line-height: 60px;

  &:hover {
    color: #618BD5;
  }
`;
