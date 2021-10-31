import * as S from './styled';
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { ButtonSubmit, Navbar, QuestionCard } from '../../components'


const Test = (props) => {

    const { exam } = useSelector((state) => state.allInfo)

    let questions = []
    questions = exam

    let auxAnswers = []

    useEffect(() => {
        questions.map((q) => {
            let auxQ = {
                id: q.id,
                value: q.value,
                answer: '0'
            }
            auxAnswers.push(auxQ)
    
            return q
        })
    })


    const onSelectAnswer = (answer, index) => {  
        auxAnswers[index].answer = answer
    }

    const onSubmit = () => {
       console.log(auxAnswers)
    }

    

    return(
        <S.Container>
            <Navbar active="test"/>
            <S.TestContainer>
                <S.Title>Selected Exam</S.Title>
                <S.SubTitle>
                    Please, answer the questions and click on the Submit Button.
                </S.SubTitle>
                <S.CardsContainer>
                    {
                        questions.map((question, index) => {
                            return(
                                <QuestionCard
                                    questionNumber = {index}
                                    key={question.id}
                                    question={question}
                                    onSelectAnswer={onSelectAnswer}
                                />
                            )
                        })
                    }                    
                </S.CardsContainer>
                <ButtonSubmit handleClick={onSubmit}/>
            </S.TestContainer>
        </S.Container>
    )

}

export default Test