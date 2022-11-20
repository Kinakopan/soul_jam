import styled from "styled-components";

export default function ProfilePic({
    
    srcimg="https://www.fillmurray.com/200/200",
    width="80px",
    s="0px",

}){

    return <ProfileCont>
        
        <Picture shadow={s} w={width} src={srcimg}/>
 
    </ProfileCont>
    
}

const ProfileCont = styled.div`
margin-top: 5px;
margin-bottom: 5px;
border-radius: 40px;
`
const Picture = styled.img`
width: ${props=>props.w};
filter: ${props=>props.shadow};
border-radius: 50%;
`