import styled from 'styled-components';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;

  background-color: #27d4ca;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #000000;

  color: #fff;

`

export const Section1 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 2%;

  @media (max-width: 800px) {
    padding-left: 0;
  }
`

export const Section2 = styled.section`
  width: 100%;
  height: 100%;
  display: 'block';

  @media (max-width: 800px) {
    display: none;
  }
`

export const UL = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`

export const LI = styled.li`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  border-radius: 5px;
  background-color: ${(props) => (props.active === true ? '#131313;' : 'transparent')};
`

export const StyledLink = styled(Link)`
  transition: 0.6s;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fafafa;
  font-family: Helvetica, Sans-Serif;

  &:hover {
    transition: 0.6s;
    color: #131313;
  }
`

export const Section3 = styled.section`
  width: 80px;
  text-align: center;
  cursor: pointer;
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`

export const Icon = styled(TiThMenu)`
  font-size: 2rem;
  color: #fafafa;
`
