import * as S from './styled';
import { Logo, ToggleMenu } from '../';
import React, { useState } from 'react';

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('dashboard');

  const toggleSideMenu = () => {
    setToggle(!toggle);
  };

  if (active !== props.active) {
    setActive(props.active);
  }

  return (
    <>
      <S.Nav>
        <S.Section1>
          <Logo />
        </S.Section1>
        <S.Section2>
          <S.UL>
            <S.LI active={active === 'test' ? true : false}>
              <S.StyledLink to="/test">Exam</S.StyledLink>
            </S.LI>
            <S.LI active={active === 'editor' ? true : false}>
              <S.StyledLink to="/editor">Editor</S.StyledLink>
            </S.LI>
           
          </S.UL>
        </S.Section2>
        <S.Section3 onClick={() => toggleSideMenu()}>
          <S.Icon />
        </S.Section3>
      </S.Nav>
      <ToggleMenu toggle={toggle} />
    </>
  );
};
export default Navbar;
