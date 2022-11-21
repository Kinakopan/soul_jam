import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from '../components/sidebar/sidebar';
import NavBar from '../components/navbar/NavBar';
import styled from 'styled-components';
import FormCard from '../components/formcard/FormCard';
import ToolTip from '../components/tooltip/ToolTip';

const BodyCont = styled.div`
background-color: #F3F3F3;
`

export default function Home() {
  return (
    <BodyCont>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <FormCard></FormCard>
      <ToolTip></ToolTip>
    </BodyCont>
  )
}
