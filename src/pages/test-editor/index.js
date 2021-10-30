import * as S from './styled';
import { Navbar, NewQuestionForm } from '../../components'
import SelectQuestionsForm from '../../components/selectQuestionsForm';

const TestEditor = (props) => {

    return(
        <S.Container>
            <Navbar active="editor"/>
            <S.TestContainer>
                <S.Title>Exam Editor</S.Title>                
                <SelectQuestionsForm/>  
                <NewQuestionForm/>             
            </S.TestContainer>            
            
        </S.Container>
    )

}

export default TestEditor