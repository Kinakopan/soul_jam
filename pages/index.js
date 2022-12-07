import { useState, useEffect } from 'react';
import { 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
 } from "firebase/auth";
import { auth } from '../firebase.config';
import Button from '../components/button/button';
import { async } from '@firebase/util';
import React from 'react';
import styled from 'styled-components';
import Router, { useRouter } from "next/router";




export default function Login() {
    
    const r = useRouter()
 
    const [Email, setEmail]= useState("");
    const [Password, setPassword] = useState("");

    const [user, setUser] = useState({});

   

    const register = async () =>{
        r.push({pathname:'./Home'})
        try{
            setEmail("");
            setPassword("");
            const user =await createUserWithEmailAndPassword(auth, Email,Password);
            r.push({pathname:'./Home'})
            console.log(user);
        }
        catch(error){
            console.log(error.message);
        }
    }
    const login= async () =>{
        r.push({pathname:'./Home'})
        try{
            setEmail("");
            setPassword("");
            const user =await signInWithEmailAndPassword(auth, Email,Password);
            r.push({pathname:'./Home'})
            console.log(user);
        }
        catch(error){
            console.log(error.message);
        }
    }

    React.useEffect(()=>{
        onAuthStateChanged(auth, (currentUser => setUser(currentUser)))
    },[])


    const GoogleSignin = async()=>{
        const provider = new GoogleAuthProvider();

        const authorization = auth;
        const result = await signInWithPopup(authorization,provider);
        console.log(result);
    }

    const handleSubmit= event =>{
        console.log("handle submit ")
        event.preventDefault();
        event.target.reset();
    }
  return (
            <MainCont>
                <LeftSide>
                    <ImgCont src='./souljam.png' alt=''/>
                </LeftSide>
                <RightSide>
                    <Subhead>Sign In</Subhead>
                    <FormCont onSubmit={handleSubmit}>
                        <label>Email</label>
                        <InputCont placeholder="type email here" 
                        onChange={(event)=>{setEmail(event.target.value)}}/>
                        <label>Password</label>
                        <InputCont placeholder="type password here" onChange={(event)=>{setPassword(event.target.value)}} />
                        <ButtonCont>
                            <Button bg='#D3D3D3' labeltxt="Log in with Google" wd='220px' sz='10px' ht='50px' onClick={()=>GoogleSignin()}></Button>
                            <Button labeltxt="Login" wd='220px' sz='30px' ht='50px' onClick={login}></Button> 
                            <Button labeltxt="Register" wd='220px' sz='30px' ht='50px' onClick={register}></Button> 
                        </ButtonCont>

                    </FormCont>
                    <div>

                        <Subhead>User Logged In:</Subhead>
                        <div>
                            {user?.email}
                        </div>
                    </div> 
                </RightSide>
                
            </MainCont>
        )
}

const FormCont = styled.form`
display: flex;
flex-direction: column;
width: 20%;
font-family: 'Poppins', sans-serif;
`
const InputCont = styled.input`
border: none;
border-bottom: 1px solid #A76FF4;
font-family: 'Poppins', sans-serif;
padding: 5px;
margin-bottom: 20px;
width: 300px;
`
const Subhead = styled.h2`
font-family: 'Poppins', sans-serif;
`
const RightSide = styled.div`
width: 500px;
`
const LeftSide = styled.div`
`
const MainCont = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
gap: 3%;
margin-top: 5%
`
const ImgCont = styled.img`
width: 400px;
`
const ButtonCont = styled.div`
display: flex;
flex-direction: column;
align-items: baseline;
`