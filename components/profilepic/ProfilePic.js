import styled from "styled-components";

export default function ProfilePic({

    srcimg="http://placekitten.com/g/200/300",
    width="70px",
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
