import React, { useState } from 'react';
import * as S from './styled';

const InputCheck = (props) => {

    
        const [ checked, setChecked ] = useState(props.value)
   
        const handleChecked = () => {
            props.onChange(!checked)
            setChecked(!checked)           
            
        }  
             
        return(
                            
                <S.Label>
                    <S.Container >
                        <S.HiddenCheckbox 
                            checked={checked}  
                            onChange={() => handleChecked()}
                        
                        />
                        <S.StyledCheckbox checked={checked} >
                            <S.Icon viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12" />
                            </S.Icon>
                        </S.StyledCheckbox>
                    </S.Container>                  
                    <S.Span>{props.title}</S.Span>
                </S.Label>
            
        )
    
}
export default InputCheck