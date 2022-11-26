
import styled from "styled-components";

const ButtonCont = styled.div`
display:flex;
justify-content: center;
margin-top: 25px;
margin-bottom: 10px;
`

const FormButton = styled.button`
background-color: ${props=>props.background};
width: ${props=>props.width};
height: ${props=>props.height};
border-radius:16px;
margin: 10x;
color: #FFFFFF;
font-family: 'Poppins', sans-serif;
font-weight: ${props=>props.weight};
font-size: ${props=>props.size};
filter: ${props=>props.shadow};
border: 0px;
`
const ATag = styled.a`
color: #FFFFFF;
font-family: 'Lato', sans-serif;
font-size: 30px;
`

export default function Button({
    labeltxt= 'Next',
    bg='#5CB8F7',    
    wt='normal',
    s="0px",
    wd="200px",
    ht="70px",
    sz="30px",
    onClick=()=>{},
    

}){
    function MouseOver(event) {
        event.target.style.background = '#448DBF';
    }

    function MouseOut(event) {
        event.target.style.background="";
    }

    return <ButtonCont>
        <FormButton onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={onClick}
        background={bg} shadow={s} weight={wt} width={wd} size={sz} height={ht}>{labeltxt}</FormButton>
    </ButtonCont>
}