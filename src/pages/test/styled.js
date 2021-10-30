import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  background-color: #131313;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;

  @media (max-width: 800px) {
    padding-top: 100px;
  }
`;

export const TestContainer = styled.div`
  height: auto;
  min-height: 600px;
  width: 80%;
  background-color: #fafafa;
  border: solid #27d4ca 3px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    padding-left: 0;
  }
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #131313;
  font-family: Helvetica, Sans-Serif;
  margin-bottom: 15px;
`

export const SubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #131313;
  font-family: Helvetica, Sans-Serif;
  margin-bottom: 30px;
`

export const CardsContainer = styled.div`
  border: solid #27d4ca 2px;
  padding-top: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`