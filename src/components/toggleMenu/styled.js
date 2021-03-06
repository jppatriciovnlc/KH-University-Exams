import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  transition: 0.8s;
  width: 200px;
  height: 150px;
  position: fixed;
  top: 75px;
  right: ${(props) => (props.toggle ? '0' : '-250px')};
  background-color: #27d4ca;
  border: solid 1px #fafafa;
  opacity: 0.95;
  z-index: 999;
`;

export const UL = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const LI = styled.li``;

export const StyledLink = styled(Link)`
  transition: 0.6s;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fafafa;
  font-family: 'roboto';

  &:hover {
    transition: 0.6s;
    color: #fafafa;
  }
`;
