import styled from 'styled-components';

export const BaseModalWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: white;
width: 50%;
font-style: italic;

.MuiCardMedia-root {
  width: 50%;
  max-height: 150px;
}

.MuiCardContent-root {
  width: 50%;
  text-align: center;
}

.MuiTypography-root {
  margin-top: 10px;
}
`;
