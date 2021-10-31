import * as S from './styled';
import React, {useState} from 'react';

const ButtonSubmit = (props) => {

  const [disabled, SetDisabled] = useState(false)

  if(props.disabled !== disabled){
    SetDisabled(props.disabled)
  }

  return (
    <S.Button
      onClick={() => props.handleClick()}
      disabled={disabled}
    >
      Submit
    </S.Button>
  );
};
export default ButtonSubmit;
