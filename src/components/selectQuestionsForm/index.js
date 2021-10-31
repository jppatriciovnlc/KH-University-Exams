import { ButtonSubmit, InputCheck } from '..';
import * as S from './styled';
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { setExams } from '../../redux/modules/allInfo'


const SelectQuestionsForm = (props) => {

    const dispatch = useDispatch();

    const [nSelected, setnSelected] = useState(0)
    const [exam, setExam] = useState([])
    const [disabledSubmit, setDisabledSubmit] = useState(true)

    let questions = []
    if(props.questions){
        questions = props.questions
    }

    

    useEffect(() => {     
        setnSelected(exam.length)
        if(exam.length >= 10  && exam.length <= 15){            
            setDisabledSubmit(false)
        }
        else {        
            if(!disabledSubmit){
                setDisabledSubmit(true)
            }
        }
    }, [exam])

    const onCheckQuestion = (selected, question) => {
        if(selected){
            let auxExam = questions[questions.map((e) => { return e.id; }).indexOf(question)]
            let newExam = exam.concat(auxExam)
            
            setExam(newExam)
        }
        else{            
            setExam(exam.filter(item => item.id !== question))
        }
    }



    const onSubmit = () => {
        let submitValues = exam
        if(submitValues.length === 10){
            submitValues.map((item)=>{
                item.value = '1.00'
                return item
            })
        }
        dispatch(setExams(submitValues));
     }

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>
                    Please, select between 10 and 15 questions and then click on the Submit Button.
                </S.Title>                    
            </S.TitleContainer>
            <S.CheckContainer>                     
                <S.SubTitle>Selected Questions: {nSelected}</S.SubTitle>    
            </S.CheckContainer>
            <S.TableContainer>
                <S.Table>
                    <S.Thead>
                        <S.TR>                            
                            <S.TH >ID</S.TH>
                            <S.TH >Question</S.TH>    
                            <S.TH >Answer</S.TH>                        
                            <S.TH >Select</S.TH>  
                        </S.TR>
                    </S.Thead>
                    <S.Tbody>
                        {
                            questions.map((question, index) => {
                                return(
                                    <S.TR key={question.id}>
                                        <S.TD>{question.id}</S.TD>
                                        <S.TD>{question.text}</S.TD>   
                                        <S.TD>{question.answer === '1'? 'Yes':'No'}</S.TD>                     
                                        <S.TD>
                                            <InputCheck  
                                                value={false}
                                                value2={question.id}
                                                onChange={onCheckQuestion} 
                                                title=""
                                            />  
                                        </S.TD>
                                    </S.TR>
                                )
                            })
                        }
                        
                    </S.Tbody>
                </S.Table>
            </S.TableContainer>
            <ButtonSubmit handleClick={onSubmit} disabled={disabledSubmit}/>
             
        </S.Container>
    )

}
export default SelectQuestionsForm