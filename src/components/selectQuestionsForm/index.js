import { ButtonSubmit, InputCheck } from '..';
import * as S from './styled';


const SelectQuestionsForm = (props) => {

    return (
        <S.Container>
            <S.TitleContainer>
                <S.Title>
                    Please, select between 10 and 15 questions and then click on the Submit Button.
                </S.Title>    
                <S.SubTitle>
                    The total Exam value is 10.0. Keep the checkbox bellow to random choose the values, or uncheck to manually choose the values.
                </S.SubTitle>  
            </S.TitleContainer>
            <S.CheckContainer>
                <InputCheck 
                    onChange={(e) => console.log(e)} 
                    title="Select random values to the questions."
                />        
                <S.SubTitle>Selected Questions: 10</S.SubTitle>        
                
            </S.CheckContainer>
            <S.TableContainer>
                <S.Table>
                    <S.Thead>
                        <S.TR>                            
                            <S.TH >ID</S.TH>
                            <S.TH >Question</S.TH>
                            <S.TH >Value</S.TH>
                            <S.TH >Select</S.TH>  
                        </S.TR>
                    </S.Thead>
                    <S.Tbody>
                        <S.TR >
                            <S.TD>313131</S.TD>
                            <S.TD>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar elit. Curabitur metus nulla, rutrum sed ultricies volutpat, ultrices vel ex. Mauris ultricies lorem sed tincidunt scelerisque. Mauris condimentum porta sem, a malesuada metus laoreet ut. Curabitur in nibh urna. Nullam at metus iaculis, facilisis velit eget, condimentum neque. Mauris sit amet sapien at diam tincidunt ultrices. Phasellus vel efficitur augue, vel dapibus mi. Nulla luctus tincidunt velit, vitae mattis urna iaculis in. Fusce tempus nisl non placerat vestibulum. Cras blandit a nunc sed tristique.    </S.TD>
                            <S.TD>0.25</S.TD>
                            <S.TD>
                                <InputCheck 
                                    onChange={(e) => console.log(e)} 
                                    title=""
                                />  
                            </S.TD>
                        </S.TR>
                        <S.TR >
                            <S.TD>313131</S.TD>
                            <S.TD>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar elit. Curabitur metus nulla, rutrum sed ultricies volutpat, ultrices vel ex. Mauris ultricies lorem sed tincidunt scelerisque. Mauris condimentum porta sem, a malesuada metus laoreet ut. Curabitur in nibh urna. Nullam at metus iaculis, facilisis velit eget, condimentum neque. Mauris sit amet sapien at diam tincidunt ultrices. Phasellus vel efficitur augue, vel dapibus mi. Nulla luctus tincidunt velit, vitae mattis urna iaculis in. Fusce tempus nisl non placerat vestibulum. Cras blandit a nunc sed tristique.    </S.TD>
                            <S.TD>0.25</S.TD>
                            <S.TD>
                                <InputCheck 
                                    onChange={(e) => console.log(e)} 
                                    title=""
                                />  
                            </S.TD>
                        </S.TR>
                        <S.TR >
                            <S.TD>313131</S.TD>
                            <S.TD>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar elit. Curabitur metus nulla, rutrum sed ultricies volutpat, ultrices vel ex. Mauris ultricies lorem sed tincidunt scelerisque. Mauris condimentum porta sem, a malesuada metus laoreet ut. Curabitur in nibh urna. Nullam at metus iaculis, facilisis velit eget, condimentum neque. Mauris sit amet sapien at diam tincidunt ultrices. Phasellus vel efficitur augue, vel dapibus mi. Nulla luctus tincidunt velit, vitae mattis urna iaculis in. Fusce tempus nisl non placerat vestibulum. Cras blandit a nunc sed tristique.    </S.TD>
                            <S.TD>0.25</S.TD>
                            <S.TD>
                                <InputCheck 
                                    onChange={(e) => console.log(e)} 
                                    title=""
                                />  
                            </S.TD>
                        </S.TR>
                        <S.TR >
                            <S.TD>313131</S.TD>
                            <S.TD>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar elit. Curabitur metus nulla, rutrum sed ultricies volutpat, ultrices vel ex. Mauris ultricies lorem sed tincidunt scelerisque. Mauris condimentum porta sem, a malesuada metus laoreet ut. Curabitur in nibh urna. Nullam at metus iaculis, facilisis velit eget, condimentum neque. Mauris sit amet sapien at diam tincidunt ultrices. Phasellus vel efficitur augue, vel dapibus mi. Nulla luctus tincidunt velit, vitae mattis urna iaculis in. Fusce tempus nisl non placerat vestibulum. Cras blandit a nunc sed tristique.    </S.TD>
                            <S.TD>0.25</S.TD>
                            <S.TD>
                                <InputCheck 
                                    onChange={(e) => console.log(e)} 
                                    title=""
                                />  
                            </S.TD>
                        </S.TR>
                    </S.Tbody>
                </S.Table>
            </S.TableContainer>
            <ButtonSubmit/>
             
        </S.Container>
    )

}
export default SelectQuestionsForm