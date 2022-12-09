import React, { useState } from 'react';
import styled from 'styled-components';
import {addDoc, collection, updateDoc} from 'firebase/firestore';
import { db, auth} from "../firebase.config";
import EditPostCard from '../components/editpostcard/editpostcard';
import { Ref } from 'react';

const Header = styled.div`
font-size:20px;
`

const Wrapper = styled.div`
display:flex;
justify-content:center;
margin:3%;
`


export default function EditPost(){
    const [editText, setEditText] = useState("");

    const editPost = async () => {
        // const q = query(collection(db, "users"), where("email", "==", email));

        // const querySnapshot = await getDocs(q);
        // let docID = '';
        // querySnapshot.forEach((doc) => {
        // // if email is you primary key then only document will be fetched so it is safe to continue, this line will get the documentID of user so that we can update it
        //   docID = doc.id;
        // });
        const editCollectionRef = collection(db,"posts")
        await updateDoc(editCollectionRef, 
        {postText: editText, 
        });
        
      }
    
    return(
        <Wrapper>
            <EditPostCard
            onChange={(event) => [
                setEditText(event.target.value)
            ]}
            onBttn={()=>{
                editPost({postText:editText})
            }}
            >

            </EditPostCard>
        </Wrapper>
    )
}