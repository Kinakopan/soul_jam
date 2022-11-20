import styled from 'styled-components';
import React from "react";
import {SideBarData} from './SideBarData';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
display:flex;
flex-direction: column;
width: 20%;
background-color: #FFFFFF;
height:100vh;
align-items: center;
justify-content:flex-start;
padding-top:3%;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const MenuUl = styled.ul`
width: 75%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:0;
`

const MenuLi = styled.li`
display:flex;
align-items:center;
align-content:center;
justify-content:flex-start;
flex-direction: row;
width: 100%;
background-color: clear;
border-radius: 10px;
padding: 10%;
margin:3%;
`

const IconCont = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
margin-right:5%;
color:black;
`

const Title = styled.div`
font-size:16px;
`
export default function SideBar(router){

    const r = useRouter();

    return(
         <Wrapper>
             <MenuUl>
             {SideBarData.map((val,key)=>{

             return (
             <MenuLi
             key={key}
             id={r.pathname == val.link ? "active" : ""}
             onClick={()=>{
                 r.push(val.link)
                }}
            > 
                <IconCont>{val.icon}</IconCont>
                <Title
                >{val.title}</Title>
             </MenuLi>
             )
            })}
             </MenuUl>
         </Wrapper>
    )
}