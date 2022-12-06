import styled from 'styled-components';
import AppText from '../apptext/AppText';
import ProfilePic from '../profilepic/ProfilePic';

const FormCont = styled.div`
display: flex;
border-radius: 15px;
width: 800px;
background-color: white;
flex-direction: column;
padding: 20px;
margin: 25px;
box-shadow: 1px 3px 5px #D3D3D3;
position: relative;
right: 5px;
top: 10px;
`
const TopCont = styled.div`
display: flex;

`
const NameCont = styled.div`
position: relative;
left: 20px;
top: 10px;
`
const DotsMenu = styled.img`
  background-image: url(${props => props.img});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  padding: 10px;
  position: relative;
    left: 600px;

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
            <DotsMenu img={"/follow/dots.png"}
            
            />
            
            
        </TopCont>
        <BottomCont>
            <AppText txt="
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my tweet yay
            this is my tweet yaythis is my tweet yaythis is my"/>
        </BottomCont>
    </FormCont>
}