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

export const TitleContainer = styled.div`
  height: auto;
  width: 90%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
  padding-top: 10px;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fafafa;
  font-family: Helvetica, Sans-Serif;
  margin-bottom: 30px;
`

export const SubTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: #fafafa;
  font-family: Helvetica, Sans-Serif;
`


export const CheckContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`



export const TableContainer = styled.div `    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    background-color: #27d4ca; 
    margin-bottom: 10px;   
    
`

export const Table = styled.table `
    margin-top: 20px;
    width: 95%;  
    border: solid #000000 2px;
    overflow-x: auto;
    padding: 0;
    margin-bottom: 10px;
    
`

export const Thead = styled.thead`
    border: solid 1px #fafafa;
    background-color:  #000000;   
    color: #fafafa;
    font-size: 1.2rem;
    width: 100%;
    height: 50px;
    margin: 0;
`

export const Tbody = styled.tbody`
     
`

export const TR = styled.tr `
    height: auto;
    border-collapse: collapse;
    
    

    &:nth-child(even){
        background-color: #000000;
        color: #fafafa;
    }
    
`

export const TH = styled.th `
    min-width: 50px;
    vertical-align: middle;
`

export const TD = styled.td `   
    width: auto;
    text-align: center;
    align-items: center;
    text-align: justify;
    word-wrap: break-word;

    vertical-align: middle;
    padding: 15px;

`