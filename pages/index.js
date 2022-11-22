import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import SideBar from '../components/sidebar/sidebar';
import Follower from '../components/follower/follower';

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  width: 100%;
  // background-color: #FFFFFF;
  height:100vh;
  align-items: space-between;
  justify-content: space-between;
  // padding-top:3%;
  // box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

export default function Home() {
  return (
    <Wrapper>
      <SideBar></SideBar>


      <Follower></Follower>
    </Wrapper>
  )
}
