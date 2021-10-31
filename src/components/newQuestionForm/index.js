import { ButtonSubmit, TextArea, Select } from '..';
import React, {useState} from 'react';
import * as S from './styled';


const NewQuestionForm = (props) => {

    const [ selectedAnswer, setSelectedAnswer ] = useState("")
    const [ question, setQuestion ] = useState("")

    const handleAnswerChange = (e) => {   
        setSelectedAnswer(e);  
    }

    const answerOptions =  [
        {
            label: "",
            value: ""
        },
        {
            label: "Yes",
            value: "yes"
        },
        {
            label: "No",
            value: "no"
        }        
    ];

    const handleQuestionChange = (e) => {
        setQuestion(e)
    }

    const onSubmit = () => {
        let submitValues = {
            question: question,
            answer: selectedAnswer
        }
        console.log(submitValues)
     }


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
                        onChange={handleQuestionChange}
                    />
                </S.FormGroup>
                <S.FormGroup
                    width='30%'
                >
                    <S.Label>Answer</S.Label>
                    <Select                                  
                        onChange={handleAnswerChange}
                        options={answerOptions} 
                    />
                </S.FormGroup>
            </S.ContainerForm>
            
            <ButtonSubmit handleClick={onSubmit}/>
        </S.Container>
    )

}
export default NewQuestionForm