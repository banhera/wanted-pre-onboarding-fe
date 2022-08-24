/* eslint-disable*/ 
import styled from 'styled-components';
import variables from '../styles/variables';

export const Wrapper = styled.div`
border: 1px solid #000;
padding-top:50px;
width:500px;
height:350px;

`;

export const h1 = styled.h1`
font-size:25px;
text-align: center;
`;

export const Form = styled.form`
  ${variables.flex({ direction: 'column' })}
  width: 300px;
  height: 300px;
  margin:0 auto;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  ${variables.flex({ direction: 'column' })}
  
`;

export const Label = styled.label`
  width: 300px;
  margin-bottom: 20px;
  ${variables.flex({ direction: 'row' })}

  span {
    display: inline-block;
    width: 80px;
  }
`;

export const InputBox = styled.input.attrs(props => ({
  type: props.inputType,
  name: props.name,
  required: true,
  minLength: props.length,
  placeholder: props.placeholder,
}))`
  border: 1px solid gray;
`;

export const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  margin: 5px 0;
  padding: 2px;
  width: 220px;
  background-color: skyblue;
  padding: 10px 16px 16px;
  cursor: ${props => props.disabled && 'not-allowed'};
`;

export const GotoBtn = styled(SubmitBtn).attrs({ type: 'button' })`
  width: 80px;
  margin-left: 20px;
  background-color: lightgray;
`;

export const ButtonAria = styled.div`
display: flex;
justify-content:space-between;
width:200px;
`;
