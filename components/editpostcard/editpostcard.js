import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../button/button';

const FormCont = styled.div`
width:80%;
height:150px;
background-color:white;
box-shadow: 0px 3px 3px #D3D3D3;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
padding:5%;
`

const FormInput = styled.input`
width:80%;
border:#B5B5B5 solid 1px;
background:${props=>props.background};
border-radius: 10px;
font-family: 'Lato', sans-serif;
`

const Header = styled.div`
font-size:20px;
`

export default function EditPostCard({onChange, onBttn}){


    return (
        <>
        <FormCont>
            <Header>Edit Post</Header>
            <FormInput
            placeholder='Edit your post'
            onChange={onChange}
            />
            <Button labeltxt='Edit Post' onPress={onBttn}></Button>
        </FormCont>
        </>
    )
}