import styled from 'styled-components';
import Button from '../button/button';
import AppText from '../apptext/AppText';
import Input from '../input/Input';
import ProfilePic from '../profilepic/ProfilePic';

const FormCont = styled.div`
display: flex;
border-radius: 15px;
width: 750px;
background-color: white;
flex-direction: column;
padding: 20px;
margin: 25px;
box-shadow: 1px 3px 5px #D3D3D3;
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