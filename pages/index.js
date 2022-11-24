import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import SideBar from '../components/sidebar/sidebar';
import NavBar from '../components/navbar/NavBar';
import FormCard from '../components/formcard/FormCard';
import ToolTip from '../components/tooltip/ToolTip';
import Follower from '../components/follower/follower';
import PostCard from "../components/postcard/PostCard"

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

export default function Home() {
  return (
    <BodyCont>
      <SideBar></SideBar>
      <PostCont>
        <FormCard></FormCard>
        <PostCard></PostCard>
      </PostCont>

      
     
      <Follower></Follower>
    </BodyCont>
  )
}
