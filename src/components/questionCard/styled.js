import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 90%;
  background-color: #000000;
  display: flex;
  flex-direction: column;

  border: solid #27d4ca 3px;
  margin-bottom: 2%;

  
`;

export const QuestionContainer = styled.div`       
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 100px;
    padding: 5px;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const Number = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  
  color: #ffffff;
  font-family: Helvetica, Sans-Serif;
  text-shadow: 1px 1px #131313;
  padding-left: 15px;
  padding-right: 15px;
`

export const Question = styled.p`
    text-align: justify;
    color: #27d4ca;
    font-family: Helvetica, Sans-Serif;
    line-height: 1.2rem;
    padding: 10px;    
`

export const Value = styled.p`
    background-color: #fafafa;
    padding: 5px;
    border-radius: 5px;
    color: #27d4ca;
    font-weight: 600;
    font-size: 1.0rem;
    font-family: Helvetica, Sans-Serif;

    @media (max-width: 800px) {
        flex-direction: column;
        font-size: 0.8rem;
        padding:2px;
    }
`

export const ButtonContainer = styled.div`
    border-top: solid #fafafa 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;

    
`

export const Button = styled.button`
    height: 40px;
    width: 100px;
    border-radius: 25px;
    border: ${props => props.selected? 'solid 5px #fffff' : 'solid 1px #fffff' } ;
    background-color: ${props => props.selected? '#27d4ca' : '#fffff' } ;
    font-family: Helvetica, Sans-Serif;
    cursor: pointer;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    }

    @media (max-width: 800px) {
        width: 70px;
    }
`
