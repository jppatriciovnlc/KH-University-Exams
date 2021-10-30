import { ButtonSubmit, TextArea } from '..';
import { Select } from '../select/styled';
import * as S from './styled';

const answerOptions =  [
    {
        label: "Yes",
        value: "yes"
    },
    {
        label: "No",
        value: "no"
    }        
];

const NewQuestionForm = (props) => {
    return(
        <S.Container>
            <S.Title>Insert a New Question</S.Title>
            <S.ContainerForm> 
                <S.FormGroup
                    width='60%'
                >
                    <S.Label>Question</S.Label>
                    <TextArea                        
                        height="50px"
                        onChange={() => console.log('q')}
                    />
                </S.FormGroup>
                <S.FormGroup
                    width='30%'
                >
                    <S.Label>Answer</S.Label>
                    <Select                                  
                        onChange={() => console.log('q')}
                        options={answerOptions} 
                    />
                </S.FormGroup>
            </S.ContainerForm>
            
            <ButtonSubmit/>
        </S.Container>
    )

}
export default NewQuestionForm