import * as S from './styled';
import React, {useState} from 'react';

const QuestionCard = (props) => {

    const [selectedAnswer, setSelectedAnswer] = useState('0');

    const onYesClick = () => {        
        setSelectedAnswer('1')
        props.onSelectAnswer('1', props.questionNumber)
    }

    const onNoClick = () => {
        setSelectedAnswer('2')
        props.onSelectAnswer('2', props.questionNumber)
    }

    return(
        <S.Container>
            <S.QuestionContainer>
                <S.Number>{(props.questionNumber +1).toString().padStart(2, "0")}</S.Number>
                <S.Question>
                    {props.question.text}                  
                </S.Question>
            </S.QuestionContainer>
            <S.ButtonContainer>                
                <S.Button
                    onClick ={() => onYesClick()}
                    selected = {selectedAnswer === '1' ? true: false}
                >
                    Yes
                </S.Button>
                <S.Button
                    onClick ={() => onNoClick()}
                    selected = {selectedAnswer === '2' ? true: false}
                >
                    No
                </S.Button>
                <S.Value>{`${props.question.value} Points`}</S.Value>
            </S.ButtonContainer>
        </S.Container>
    )
}
export default QuestionCard