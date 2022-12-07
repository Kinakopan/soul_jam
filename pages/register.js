
import { useState, useEffect } from 'react';
import { 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword
 } from "firebase/auth";
import { auth } from '../firebase.config';
import Button from '../components/button/button';
import { async } from '@firebase/util';
import React from 'react';
import styled from 'styled-components';


export default function Home() {
    const [username, setUsername] = useState("");
    const [registerEmail, setRegisterEmail]= useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});


    const register = async () =>{
        try{
            setUsername("");
            setRegisterEmail("");
            setRegisterPassword("");
            const user =await createUserWithEmailAndPassword(auth, registerEmail, registerPassword, username);
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
            <div>
                <form  action="/register"  method='POST' onSubmit={handleSubmit}>
                <Button bg='#D3D3D3' labeltxt="Log in with Google" wd='150px' sz='10px' ht='50px' onClick={()=>GoogleSignin()}></Button>
                    <label>Username:</label>
                    <input placeholder="Username..." 
                   onChange={(event)=>{setUsername(event.target.value)}}
                   name="username"
                   />
                    <label>Email:</label>
                    <input placeholder="Email..." 
                   onChange={(event)=>{setRegisterEmail(event.target.value)}}
                   name="email"
                   />
                    <label>Password:</label>
                    <input placeholder="Password" onChange={(event)=>{setRegisterPassword(event.target.value)}} 
                     name="password"
                    />
                    <Button labeltxt="Register" wd='150px' sz='10px' ht='50px' onClick={register}></Button>
                </form>
                <div>
                    <h2>User Logged In:</h2>
                    <div>
                        {user?.email}
                    </div>
                </div>
            </div>
        )
}