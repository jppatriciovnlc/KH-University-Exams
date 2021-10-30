import * as S from './styled';
import React from 'react';

const ToggleMenu = (props) => {
  let toggle = props.toggle;
  return (
    <S.Container toggle={toggle}>
      <S.UL>
        <S.LI>
          <S.StyledLink to="/test">Exam</S.StyledLink>
        </S.LI>
        <S.LI>
          <S.StyledLink to="/editor">Editor</S.StyledLink>
        </S.LI>        
      </S.UL>
    </S.Container>
  );
};
export default ToggleMenu;
