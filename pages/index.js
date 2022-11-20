import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideBar from '../components/sidebar/sidebar';


export default function Home() {
  return (
    <div>
      <SideBar></SideBar>
    </div>
  )
}
