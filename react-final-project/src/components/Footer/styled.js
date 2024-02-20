import styled from 'styled-components';

export const FooterWrapper = styled.div`
  height: auto;
  background: #152D4F;
  background-image: url(../img/footer.png);
  background-repeat: no-repeat;
  background-size: 10%; 
  background-position: left bottom;
  color: white;
  font-style: italic;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  line-height: 20px;
  padding-top: 20px;
  padding-right: 20px;
  text-align: end;
`;

export const SocialLink = styled.a`
display: block;
color: white;
font-size: 15px;
font-style: italic;
text-decoration: none;
margin-bottom: 20px;

&:hover {
  color: #618BD5;
}
`;
