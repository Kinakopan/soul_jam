import styled from 'styled-components';


const MenuBox = styled.ul`
width: 80px;
background-color:#5cb8f6;
list-style:none;
padding: 15px;
border-radius:16px;
position:absolute;
right:2%;
`

const Options = styled.li`
font-size:16px;
color:white;
font-family: 'Lato', sans-serif;
user-select:none;
`

export default function BubbleMenu(

    onEdit = () => {},
    onReport = () => {reportPost(post.id)}
){

    return ( 
        <MenuBox>
            <Options onClick={onEdit}>Edit</Options>
            <Options onClick={onReport} style={{marginTop:'15px'}}>Report</Options>
        </MenuBox>
    )
}