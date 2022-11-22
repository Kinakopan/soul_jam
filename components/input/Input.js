import styled from 'styled-components';

const InputCont = styled.div`
display:flex;
flex-direction:column;
`

const FormInput = styled.input`
padding:10px;
border:#B5B5B5 solid 1px;
background:${props=>props.background};
width: 700px;
border-radius: 10px;
font-family: 'Lato', sans-serif;
margin-left: 20px;
`

const FormLabel = styled.label`
font-size:14px;
margin:10px;
`

export default function Input({
  labeltxt='',
  inputtype='text',
  bg='#FFF'
}){

  return <InputCont>
    <FormLabel>{labeltxt}</FormLabel>
    <FormInput placeholder="What's on your mind?" type={inputtype} background={bg} />
  </InputCont>
}