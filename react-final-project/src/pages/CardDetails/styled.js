import styled from 'styled-components';

export const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ACCCFF;
  font-style: italic;

  img {
    max-width: 100%;
    max-height: 250px;
    padding-bottom: 10px;
  }

  h1 {
    font-size: 25px;
  }

  p {
    font-size: 20px;
  }

  button.quizButton {
    background-color: #618BD5;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #152D4F;
    }
  }
`;
