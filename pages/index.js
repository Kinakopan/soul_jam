import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import SideBar from '../components/sidebar/sidebar';
import NavBar from '../components/navbar/NavBar';
import FormCard from '../components/formcard/FormCard';
import ToolTip from '../components/tooltip/ToolTip';
import Follower from '../components/follower/follower';

const BodyCont = styled.div`
  background-color: #F3F3F3;
  display:flex;
  flex-direction: row;
  width: 100%;
  height:100vh;
  align-items: space-between;
  justify-content: space-between;
`

export default function Home() {
  return (
    <BodyCont>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <FormCard></FormCard>
     
      <Follower></Follower>
    </BodyCont>
  )
}
