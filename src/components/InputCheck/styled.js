import styled  from 'styled-components';



export const Label = styled.label `
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   height: fit-content;
   padding: 2px;
   margin: 3px;
   margin-right: 15px;

`

export const Container = styled.div `
   display: inline-block;
   vertical-align: middle;
   height: fit-content;
  
`

export const Span = styled.span `
   display: flex;
   height: fit-content;
   margin-left: 10px;
   font-size: 0.8rem;
   font-weight: 700;
   color: #fafafa;
   font-family: Helvetica, Sans-Serif;
    
`


export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
   opacity: 0;
   overflow: hidden;
   padding: 0;
   position: absolute;
   white-space: nowrap;
   width: 1px;

`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;

  `

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => props.checked ? '#27d4ca' : '#fafafa'};
  border-radius: 3px;
  transition: all 150ms;
  margin-top: 2px;
  border: ${props => props.checked ? 'solid 2px #ffffff' : 'solid 1px black'};

  ${HiddenCheckbox}:focus + & {
   box-shadow: 0 0 0 3px '#fafafa';
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }

`