import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 90%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: solid #27d4ca 3px;
  margin-bottom: 2%;
  padding-bottom:20px;

  
`;


export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fafafa;
  font-family: Helvetica, Sans-Serif;
  margin-bottom: 30px;
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 95%;
    margin-bottom: 20px;
`

export const FormGroup = styled.div `
    display: flex ;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 120px;
    min-width: 50px;
    width: ${(props) => props.width? props.width : '45%'};
    padding: 1%;
    margin-top: 10px;
    margin-bottom: 10px;
    border: solid #fafafa 1px;

    background-color: #0a0a0a;
`

export const Label = styled.p `
   margin: 0;
   font-size: 1.2rem;
   font-weight: 600;
   margin-bottom: 5%;
   color: #fafafa;
   font-family: 'roboto';
`