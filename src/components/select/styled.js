
import styled  from 'styled-components';

export const Select = styled.select `
   width: ${(props) => props.width? props.width : '85%'};
   height: ${(props) => props.height? props.height : '50px'};
   background-color: #fafafa;
   color: #0a0a0a;
   font-family: 'roboto';
   font-size: 0.9rem;
   font-weight: 600;

   border: 2px solid #27d4ca;

   &:hover {
    background-color: #27d4ca;   
    
    border: 2px solid #ffffff;


   }

   
`

export const Option = styled.option `
   
`