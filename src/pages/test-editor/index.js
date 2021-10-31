import * as S from './styled';
import { Navbar, NewQuestionForm } from '../../components'
import { useSelector } from 'react-redux';
import SelectQuestionsForm from '../../components/selectQuestionsForm';

const TestEditor = (props) => {

    const { allQuestions } = useSelector((state) => state.allInfo)

    return(
        <S.Container>
            <Navbar active="editor"/>
            <S.TestContainer>
                <S.Title>Exam Editor</S.Title>                
                <SelectQuestionsForm
                    questions ={allQuestions}
                />  
                <NewQuestionForm/>             
            </S.TestContainer>            
            
        </S.Container>
    )

}

export default TestEditor