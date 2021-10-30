import styled from 'styled-components';


export const Button = styled.button`
    height: 40px;
    width: 200px;
    border-radius: 25px;
    border: solid 1px #fff;
    background-color: #27d4ca;
    font-family: Helvetica, Sans-Serif;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;

    @media (max-width: 800px) {
        width: 70px;
    }
`