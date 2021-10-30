import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 300px;
  margin: 20px;

  @media (max-width: 800px) {
    width: 200px;
  }
`;

export const Logo1 = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  
  color: #ffffff;
  font-family: Helvetica, Sans-Serif;
  text-shadow: 1px 1px #131313;

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

export const Logo2 = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #131313;
  font-family: Helvetica, Sans-Serif;

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;
