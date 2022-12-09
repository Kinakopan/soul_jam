import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from '../components/sidebar/sidebar';
import NavBar from '../components/navbar/NavBar';
import FormCard from '../components/formcard/FormCard';
import ToolTip from '../components/tooltip/ToolTip';
import Follower from '../components/follower/follower';
import PostCard from "../components/postcard/PostCard";
import React, { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import styled from 'styled-components';
import AppText from '../components/apptext/AppText';
import ProfilePic from '../components/profilepic/ProfilePic';
import { getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import { db } from "../firebase.config";
import BubbleMenu from '../components/bubblemenu/BubbleMenu';
import EditPost from './EditPost';

const BodyCont = styled.div`
  background-color: #F3F3F3;
  display:flex;
  flex-direction: row;
  width: 100%;
  height:100vh;
  align-items: space-between;
  justify-content: space-between;
`
const PostCont = styled.div`
display:flex;
flex-direction: column;
width: 100%;
height:100vh;

`
const FormCont = styled.div`
display: flex;
border-radius: 15px;
width: 800px;

flex-direction: column;
padding: 20px;
margin: 25px;

position: relative;
right: 5px;
top: 10px;
`
const TopCont = styled.div`
display: flex;

`

const TweetCont = styled.div`
display: flex;
border-radius: 15px;
width: 500px;
background-color: white;
flex-direction: column;
padding: 5px;
margin: 25px;
box-shadow: 1px 3px 5px #D3D3D3;
position: relative;
right: 5px;
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
const Report = styled.img`
  width: 20px;
  padding: 10px;
  display: flex;
  justify-content: center
`

const IconCont = styled.div`
  display:flex;
  flex-direction:row;
`

export default function Home() {
  // const [menu, openMenu] = useState(false);
  // function handleMenu(){
  //     if (menu === false){
  //         openMenu(true)
  //     }else if (menu === true){
  //         openMenu(false)
  //     }
  // }

  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [editBox, setEditBox] = useState(false);
  const openEditBox = () => {
    if (editBox === true){
      setEditBox(false)
    }else {
      setEditBox(true)
    }
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(
        data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };
    getPosts();
  },[]);

  const reportPost = async (id) =>{
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    alert("Post has been reported");
  }

  return (
    <BodyCont>
      <SideBar></SideBar>
      <PostCont>

        <CreatePost/>

        
        <FormCont>
        
        <div id="PostDisplay">
        {postLists.map((post) => {
            return (
            <TweetCont>
              

              <TopCont>
              <ProfilePic
              width="50px"
              />
              <h5>@{post?.author?.name}</h5>            
              </TopCont>
        
              
              <p> 
              {post.postText}
              </p>

              { editBox ? <EditPost/> : null}
              <IconCont>
                <Report onClick={() => {
                  reportPost(post.id);
                }} src='./warning.png'/>
                <Report onClick={() => {
                  openEditBox();
                }} src='./edit.png'/>
              </IconCont>
              </TweetCont>
        )})}

        </div>
      </FormCont>

      </PostCont>

      
     
      <Follower></Follower>
    </BodyCont>
  )
}
