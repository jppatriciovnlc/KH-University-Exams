import * as S from './styled';

const QuestionCard = (props) => {

    return(
        <S.Container>
            <S.QuestionContainer>
                <S.Number>01</S.Number>
                <S.Question>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper sem eu urna placerat venenatis. Vivamus eleifend urna nec sem finibus sollicitudin. Quisque at pulvinar elit. Curabitur metus nulla, rutrum sed ultricies volutpat, ultrices vel ex. Mauris ultricies lorem sed tincidunt scelerisque. Mauris condimentum porta sem, a malesuada metus laoreet ut. Curabitur in nibh urna. Nullam at metus iaculis, facilisis velit eget, condimentum neque. Mauris sit amet sapien at diam tincidunt ultrices. Phasellus vel efficitur augue, vel dapibus mi. Nulla luctus tincidunt velit, vitae mattis urna iaculis in. Fusce tempus nisl non placerat vestibulum. Cras blandit a nunc sed tristique.                     
                </S.Question>
            </S.QuestionContainer>
            <S.ButtonContainer>                
                <S.ButtonYes>Yes</S.ButtonYes>
                <S.ButtonNo>No</S.ButtonNo>
                <S.Value>0.25 Pontos</S.Value>
            </S.ButtonContainer>
        </S.Container>
    )
}
export default QuestionCard