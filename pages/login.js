
import { useState, useEffect } from 'react';
import { 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword
 } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import Button from '../components/button/button';
import { async } from '@firebase/util';
import React from 'react';



export default function Home() {

    const [loginEmail, setLoginEmail]= useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    const login = async () =>{
        try{
            setLoginEmail("");
            setLoginPassword("");
            const user =await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
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
                <form onSubmit={handleSubmit}>
                <Button bg='#D3D3D3' labeltxt="Log in with Google" wd='150px' sz='10px' ht='50px' onClick={()=>GoogleSignin()}></Button>
                    <label>Email:</label>
                    <input placeholder="Email..." 
                   onChange={(event)=>{setLoginEmail(event.target.value)}}/>
                    <label>Password:</label>
                    <input placeholder="Password" onChange={(event)=>{setLoginPassword(event.target.value)}} />
                    <Button labeltxt="Login" wd='150px' sz='30px' ht='50px' onClick={login}></Button>
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