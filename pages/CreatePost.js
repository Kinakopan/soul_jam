import React, { useState } from 'react';
import Button from '../components/button/button';
import ProfilePic from '../components/profilepic/ProfilePic';
import styled from 'styled-components';
import {addDoc, collection} from 'firebase/firestore';
import { db, auth} from "../firebase.config";


const FormCont = styled.div`
display: flex;
border-radius: 15px;

width: 850px;
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


function CreatePost() {
const [postText, setPostText] = useState("");

const postsCollectionRef = collection(db, "posts");

const makePost = async () => {
    await addDoc(postsCollectionRef, 
    {postText, 
    author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}} )
    
  }

  return (
    <FormCont>
        <TopCont>
            <ProfilePic></ProfilePic>
        
        <textarea
        placeholder="whats on ur mind?"
        onChange={(event) => {
            setPostText(event.target.value);
        }}
        />
        
        </TopCont>
      <BottomCont>
        <Button 
        onClick={makePost}
        labeltxt="submit"/>
        </BottomCont>
    </FormCont>
      
   
  );
}

export default CreatePost;