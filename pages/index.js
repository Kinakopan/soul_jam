import { useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../firebase.config";
import Button from "../components/button/button";
import { async } from "@firebase/util";
import React from "react";
import styled from "styled-components";
import  {useRouter } from "next/router";
import {addDoc, collection, query, where, getDocs} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { ContactSupportOutlined } from "@mui/icons-material";

export default function Login() {
  const r = useRouter();
  const {home} = r.query

  const [LoginName, setLoginName] = useState("");
  const [Email, setEmail] = useState("");
  const [UserImg, setUserImg] = useState("");
  const [Password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  const [user, setUser] = useState({});

  const user_listCollectionRef = collection(db, "user_list");

  const register = async () => {
    try {
      const userId = uuidv4()
      // r.push({ pathname: `./Home/${userId}`});
      // const user = await createUserWithEmailAndPassword(auth, Email, Password);

      await addDoc(user_listCollectionRef,
      {userId, Email, LoginName, UserImg, Password}),
      r.push({ pathname: `./Home/${userId}`});

    } catch (error) {
      console.log(error.message);
    }
  };
  const login = async () => {
    try {
      // const user = await signInWithEmailAndPassword(auth, Email, Password);
      // const userId = auth.currentUser.uid
      // if(user){
      //   return r.push({ pathname: `./Home/${userId}`})
      // }

      //if google user doesn't exist
      // if(!user) {
        const e = query(collection(db, "user_list"), where("Email", "==", Email, "Password", "==", Password ));
        // const p = query(collection(db, "user_list"), where("Password", "==", Password));
        const getUsersInfo = async () => {
          const UserInfo = await getDocs(e);
          UserInfo.forEach((doc) => {
            const dbUserId = doc._document.data.value.mapValue.fields.userId.stringValue;
            const dbEmail = doc._document.data.value.mapValue.fields.Email.stringValue;
            const dbPassword = doc._document.data.value.mapValue.fields.Password.stringValue;

            if(dbEmail == Email && dbPassword == Password ) {
              r.push({ pathname: `./Home/${dbUserId}`});
            } else {
              alert("Incorrect email or password");
            }
          });
        // };
        // const getUsersPassword = async () => {
        //   const Password = await getDocs(p);
        //   Password.forEach((doc) => {
        //     const Password = doc._document.data.value.mapValue.fields.LoginName.stringValue;
        //     getUsersPassword(Password);
        //   });
        // };
      };
      getUsersInfo();
      // console.log("alert")
      // console.log(user);
      // r.push({ pathname: "./Home/[home].js" });

    } catch (error) {
      console.log(error.message);
      // alert("user doesn't exist");
    }
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  }, []);

  const GoogleSignin = async () => {
    const provider = new GoogleAuthProvider();
    const authorization = auth;
    const result = await signInWithPopup(authorization, provider);
    console.log(result);
    const userId = auth.currentUser.uid
    r.push({ pathname: `./Home/${userId}`})

  };

  const handleSubmit = (event) => {
    console.log("handle submit ");
    event.preventDefault();
    event.target.reset();
  };
  return (
    <MainCont>
      <LeftSide>
        <ImgCont src="./souljam.png" alt="" />
      </LeftSide>
      <RightSide>
        <Subhead>Sign In</Subhead>
        <FormCont onSubmit={handleSubmit}>
          <label>Name</label>
            <InputCont
              placeholder="type your user name here"
              onChange={(event) => {
                setLoginName(event.target.value);
                // console.log(uuidv4())
              }}
          />
          <label>Email</label>
          <InputCont
            placeholder="type email here"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label>Password</label>
          <InputCont
            placeholder="type password here"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <label>Image url</label>
          <InputCont
            placeholder="upload your profile picture URL here"
            onChange={(event) => {
              setUserImg(event.target.value);
            }}
          />

          <ButtonCont>
            <Button
              bg="#D3D3D3"
              labeltxt="Log in with Google"
              wd="220px"
              sz="10px"
              ht="50px"
              onClick={() => GoogleSignin()}
            ></Button>
            <Button
              labeltxt="Login"
              wd="220px"
              sz="30px"
              ht="50px"
              onClick={login}
            ></Button>
            <Button
              labeltxt="Register"
              wd="220px"
              sz="30px"
              ht="50px"
              bg="#A76FF4"
              onClick={register}
            ></Button>
          </ButtonCont>
        </FormCont>
        <div>
          <Subhead>User Logged In:</Subhead>
          <div>{user?.email}</div>
        </div>
      </RightSide>
    </MainCont>
  );
}

const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  font-family: "Poppins", sans-serif;
`;
const InputCont = styled.input`
  border: none;
  border-bottom: 1px solid #a76ff4;
  font-family: "Poppins", sans-serif;
  padding: 5px;
  margin-bottom: 20px;
  width: 300px;
`;
const Subhead = styled.h2`
  font-family: "Poppins", sans-serif;
`;
const RightSide = styled.div`
  width: 500px;
`;
const LeftSide = styled.div``;
const MainCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3%;
  margin-top: 5%;
`;
const ImgCont = styled.img`
  width: 400px;
`;
const ButtonCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;
