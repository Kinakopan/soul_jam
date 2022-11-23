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
const NameCont = styled.div`
position: relative;
left: 20px;
top: 10px;
`
const BottomCont = styled.div`
display: flex;
`

export default function PostCard({

}){
    return <FormCont>
        <TopCont>
           
            <ProfilePic></ProfilePic>
            <NameCont>
                <AppText txt="name"/>
            </NameCont>
            
            
        </TopCont>
        <BottomCont>
            <AppText txt="
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my tweet yay"/>
        </BottomCont>
    </FormCont>
}