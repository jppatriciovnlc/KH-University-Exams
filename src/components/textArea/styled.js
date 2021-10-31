import styled  from 'styled-components';

export const Input = styled.textarea `
   width: 85%;
   height: ${(props) => props.height? props.height : '50px'};

   background-color: #fafafa;
   color: rgba(0, 0, 0, 1);
   font-family: 'roboto';
   font-size: 0.9rem;
   font-weight: 600;
   padding-left: 2%;
   word-wrap: break-word;

   
   border: 2px solid #27d4ca;

   ::placeholder{      
      //opacity: 1;
   }  

   &:focus {
      transition: 0.5s;
      outline: none;      
      border: 2px solid #ffffff;
      background-color: #27d4ca;
      
      font-weight: 700;
   }

   
`
