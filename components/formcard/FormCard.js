
import styled from 'styled-components';
import Button from './Button';
import AppText from './AppText';
import Input from './Input';
import ProfilePic from './ProfilePic'

const FormCont = styled.div`
display: flex;
border-radius: 15px;
width: 850px;
background-color: #252525;
flex-direction: column;
padding: 20px;
margin: 25px;
`
const TopCont = styled.div`
display: flex;
`
const BottomCont = styled.div`
display: flex;
justify-content: flex-end;
`

export default function FormCard({

}){
    return <FormCont>
        <TopCont>
            <ProfilePic></ProfilePic>
            <Input></Input>
        </TopCont>
        <BottomCont>
            <Button labeltxt='Post'></Button>
        </BottomCont>
    </FormCont>
}