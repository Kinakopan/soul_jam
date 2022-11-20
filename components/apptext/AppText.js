import styled from 'styled-components';

const TextCont = styled.div`
display:flex;
justify-content: ${props=>props.jc};
margin-top: 25px;
margin-bottom: 10px;
`
const Text = styled.div`
text-align:left;
color: ${props=>props.color};
font-size: ${props=>props.fontsize};
font-family: 'Lato', sans-serif;
font-weight: ${props=>props.weight};
filter: ${props=>props.shadow};
`

export default function AppText({
    txt='type here',
    sz='16px',
    clr='#0A0908',
    wt='normal',
    placement='center',
    s="0px"
    
}){

    return <TextCont jc={placement}>
        <Text shadow={s} fontsize={sz} color={clr} weight={wt}>
            {txt}
        </Text>
    </TextCont>
}