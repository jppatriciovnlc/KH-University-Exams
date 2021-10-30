import * as S from './styled';
import { ButtonSubmit, Navbar, QuestionCard } from '../../components'

const Test = (props) => {

    return(
        <S.Container>
            <Navbar active="test"/>
            <S.TestContainer>
                <S.Title>Selected Exam</S.Title>
                <S.SubTitle>
                    Please, answer the questions and click on the Submit Button.
                </S.SubTitle>
                <S.CardsContainer>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                    <QuestionCard/>
                </S.CardsContainer>
                <ButtonSubmit/>
            </S.TestContainer>
        </S.Container>
    )

}

export default Test