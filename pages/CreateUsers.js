import React, { useState } from 'react';
import Button from '../components/button/button';
import ProfilePic from '../components/profilepic/ProfilePic';
import styled from 'styled-components';
import {addDoc, collection} from 'firebase/firestore';
import { db, auth} from "../firebase.config";


const FormCont = styled.div`
display: flex;
border-radius: 15px;

width: 200px;
height: 200px;

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
const TextCont = styled.textarea`
font-family: 'Poppins', sans-serif;
border: 1px solid #5cb8f6;
border-radius: 10px;
margin-left: 20px;
width: 200px;
`


function CreateUsers() {
const [userName, setUserName] = useState("");

const usersCollectionRef = collection(db, "users");

const makeUser = async () => {
    await addDoc(usersCollectionRef,
    {userName,
    author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}} )

  }

  return (
    <FormCont>
      <TopCont>

        <TextCont
        placeholder="enter your name here"
        onChange={(event) => {
            setUserName(event.target.value);
        }}
        />

        </TopCont>
      <BottomCont>
        <Button
        onClick={makeUser}
        labeltxt="submit"/>
        </BottomCont>
    </FormCont>


  );
}

export default CreateUsers;
