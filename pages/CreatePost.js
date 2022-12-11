import React, { useEffect, useState } from 'react';
import Button from '../components/button/button';
import ProfilePic from '../components/profilepic/ProfilePic';
import styled from 'styled-components';
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db, auth} from "../firebase.config";
import  {useRouter } from "next/router";
import { v4 as uuidv4 } from 'uuid';

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
const TextCont = styled.textarea`
font-family: 'Poppins', sans-serif;
border: 1px solid #5cb8f6;
border-radius: 10px;
margin-left: 20px;
width: 800px;
`







function CreatePost() {
const [PostText, setPostText] = useState("");
const [UserName, setUserName] = useState("");

// const user_listCollectionRef = collection(db, "user_list");
const posts_listCollectionRef = collection(db, "posts_list");
const router = useRouter()


useEffect(() => {
  const test = async () => {
  const userId = router.query.home
  const postId = uuidv4()
  if(UserName){
   await addDoc(posts_listCollectionRef,
  {PostText,
  author: {LoginName: UserName, UserId: userId, PostId: postId}} )
  }

  };test()},[UserName]);

// const makePost = async () => {
//   const userId = router.query.home
//   console.log(router.query.home);
//   await addDoc(postsCollectionRef,
//   {postText,
//   author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}} )
// }

const makePost = async () => {
  const userId = router.query.home
    const postId = uuidv4()
  console.log(router.query.home);

  const q = query(collection(db, "user_list"), where("userId", "==", userId));
  const getPosts = async () => {
    const LoginName = await getDocs(q);
      LoginName.forEach((doc) => {
      const user = doc._document.data.value.mapValue.fields.LoginName.stringValue;
      setUserName(user);

    });
  };
  getPosts();
  if (!UserName == ""){
    console.log(UserName)
    await addDoc(posts_listCollectionRef,
  {PostText,
  author: {LoginName: UserName, UserId: userId, PostId:postId}} )
  }

}


  return (
    <FormCont>
        <TopCont>
            <ProfilePic></ProfilePic>

        <TextCont
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
