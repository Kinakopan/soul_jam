import styled from 'styled-components'
import AppText from './AppText'
import ProfilePic from './ProfilePic'

const NavCont = styled.div`
display: flex;
padding: 1%;
background-color: #252525;
justify-content: space-between;
align-items: center;
`
const Logo = styled.div`
color: #A76FF4;
font-size: 30px;
font-family: 'Shrikhand', cursive;
margin-left: 2%;
`

export default function NavBar({

}){

    return <NavCont>
        <Logo>soulJam</Logo>
        <ProfilePic></ProfilePic>
         </NavCont>
}