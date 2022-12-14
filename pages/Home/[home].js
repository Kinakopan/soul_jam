import React, { useEffect, useState } from "react";
import  {useRouter } from "next/router";
import { db, auth } from "../../firebase.config";
import { doc, getDocs, addDoc, deleteDoc, updateDoc, collection, query, where } from "firebase/firestore";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import SideBar from "../../components/sidebar/sidebar";
import NavBar from "../../components/navbar/NavBar";
import FormCard from "../../components/formcard/FormCard";
import ToolTip from "../../components/tooltip/ToolTip";
import PostCard from "../../components/postcard/PostCard";
import CreatePost from "../CreatePost";
import CreateUsers from "../CreateUsers";
import AppText from "../../components/apptext/AppText";
import ProfilePic from "../../components/profilepic/ProfilePic";
import BubbleMenu from "../../components/bubblemenu/BubbleMenu";
import EditPostCard from "../../components/editpostcard/editpostcard";
import Button from "../../components/button/button";

const BodyCont = styled.div`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  align-items: space-between;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
`;
const PostCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const FormCont = styled.div`
  display: flex;
  border-radius: 15px;
  width: 800px;

  flex-direction: column;
  padding: 20px;
  margin: 25px;

  position: relative;
  right: 5px;
  top: 10px;
`;
const TopCont = styled.div`
  display: flex;
`;

const TweetCont = styled.div`
  display: flex;
  border-radius: 15px;
  width: 80%;
  background-color: white;
  flex-direction: column;
  padding: 4%;
  margin: 25px;
  margin-top: -10px;
  box-shadow: 1px 3px 5px #d3d3d3;
  position: relative;
  right: 5px;
  top: 10px;
`;
const DotsMenu = styled.img`
  background-image: url(${(props) => props.img});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  padding: 10px;
  position: relative;
  left: 600px;
`;
const Report = styled.img`
  width: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const IconCont = styled.div`
  display: flex;
  flex-direction: row;
`;
const Text = styled.p`
  margin-left: 20px;
`;





//=== from here === follow unfollow===
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    height: 100vh;
    background-color: #ffffff;
    padding-top: 3%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    color: black;
    font-size: 16px;
  `;
  const Profile = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    width: 80%;
    margin-right: 5%;
  `;
  const ProfUserName = styled.p``;
  const ProfImg = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 30%;
  `;
  const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 40px;
    margin: 15px 0;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
  `;
  const SearchIcon = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    width: 20px;
    height: 20px;
    margin: 5px;
    box-sizing: border-box;
  `;
  const SearchText = styled.p`
    color: #a5a5a5;
  `;
  const StoriesCont = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    position: relative;
    width: 85%;
    padding: 0;
  `;
  const StoriesUl = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
    width: 100%;
    overflow: hidden;
    list-style: none;
    padding: 0;
  `;
  const StoriesLi = styled.li`
    position: relative;
  `;
  const StoriesImg = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #71b0ff;
  `;
  const FollowText = styled.button`
    background-color: #ffffff;
    cursor: pointer;
  `;
  const UnFollowText = styled.button`
    background-color: #ffffff;
    cursor: pointer;
  `;
  const StoriesUsername = styled.p`
    display: flex;
    justify-content: center;
  `;
  const NextIcon = styled.img`
    background-image: url(${(props) => props.img});
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ffffff;
    position: absolute;
    top: 35px;
    right: -6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid white;
    padding: 5px;
  `;
  const FriendsCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-right: 5%;
  `;
  const FriendsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `;
  const FriendsTitle = styled.p`
    width: calc(100% - 20px);
    font-weight: bold;
  `;
  const FollowDotsMenu = styled.img`
    background-image: url(${(props) => props.img});
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    width: 20px;
    padding: 10px;
  `;
  const FriendsUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    margin: 0;
    padding: 0;
  `;
  const FriendsLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;
  const FriendsImg = styled.div`
    background-image: url(${(props) => props.img});
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `;
  const FriendsName = styled.p`
    width: calc(100% - 150px);
    font-size: 14px;
  `;
  const OnlineStatusCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 100%;
  `;
  const OnlineDot = styled.span`
    display: block;
    width: 5px;
    height: 5px;
    background: #48d28b;
    border-radius: 50%;
  `;
  const LastLogin = styled.span``;

//=== until here=== follow unfollow ===

export default function Home(

) {
  // const [menu, openMenu] = useState(false);
  // function handleMenu(){
  //     if (menu === false){
  //         openMenu(true)
  //     }else if (menu === true){
  //         openMenu(false)
  //     }
  // }

  const [postLists, setPostList] = useState(null);
  const posts_listCollectionRef = collection(db, "posts_list");
  const [editBox, setEditBox] = useState(false);
  const openEditBox = () => {
    if (editBox === true) {
      setEditBox(false);
    } else {
      setEditBox(true);
    }
  };

  const [postTxt, setPostText] = useState("");
  const UpdatePost = async(id) => {
    const userRef = doc(db, 'posts', id);
    updateDoc(userRef, {
        postText: postTxt,
      }, { merge: true }).then(res => setPostList(null));
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(posts_listCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(postLists)
    };
    getPosts();
  }, []);

  const reportPost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    alert("Post has been reported");
  };

  //===user's name===
  // const [userPath, setuserPath] = useState({});
  // const ShowLocation = ()=> {
    // const location = useLocation();
    // const currentLocation = new URL(window.location.href);
    // setPath(location);
  // }
  // console.log(currentLocation.pathname);
  // console.log(currentLocation);
  // console.log(location);

  // const userId = auth.currentUser.uid

  // const [user, setUser] = useState({});
  // const r = useRouter();

  // React.useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  // }, []);

  // const user_listCollectionRef = collection(db, "user_list");




  // const [UserName, setUserName] = useState("");
  // const router = useRouter();
  // const userId = router.query.home
  // console.log(router.query.home);
  // console.log(userId);




  // const getPosts = async () => {
  //   const q = query(collection(db, "user_list"), where("userId", "==", userId));
  //   const LoginName = await getDocs(q);
  //   LoginName.forEach((doc) => {
  //     const user = doc._document.data.value.mapValue.fields.LoginName.stringValue;
  //     setUserName(user);
  //   });
  // };

  //===define follow===
  const [followers, setFollowers] = useState(null);
  const usersCollectionRef = collection(db, "users");

  //===unfollow function===
  // const adddFollowers = async () => {
  //   try {
  //     await addDoc(friends_listCollectionRef,
  //     {userId, friendId, friendImg, friendName}),
  //     r.push({ pathname: "./Home/[home].js" });

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  useEffect(() => {
    const getFollowers = async () => {
      const data = await getDocs(usersCollectionRef);
      setFollowers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getFollowers();
  }, []);

  return (
    <BodyCont>
      <SideBar></SideBar>
      <PostCont>
        <CreatePost />

        <FormCont>
          <div id="PostDisplay">
          {postLists !== null &&
            postLists.map((post) => {
              return (
                <TweetCont>
                  <TopCont>
                    <ProfilePic width="50px" />
                    <h5>@{post?.author?.LoginName}</h5>
                  </TopCont>

                  <Text>{post.PostText}</Text>

                  {editBox ?
                  <>
                    <EditPostCard
                    onChange={(txt)=>{
                      setPostText(txt.target.value)
                    }}
                    onBttn={() => UpdatePost(post.id)}
                    />
                    </>
                    : null}

                  <IconCont>
                    <Report
                      onClick={() => {
                        reportPost(post.id);
                      }}
                      src="./warning.png"
                    />
                    <Report
                      onClick={() => {
                        openEditBox()}
                      }
                      src="./edit.png"
                    />
                  </IconCont>


                  <FollowText
                    onClick={() => adddFollowers()}
                    >Follow
                  </FollowText>


                </TweetCont>
              );
            })}
          </div>
        </FormCont>
      </PostCont>




      {/* follow unfollow */}
      <Wrapper>
        <Profile>
          <ProfUserName>UserName</ProfUserName>
          <ProfImg img={"/follow/user4.jpg"} />
        </Profile>

        {/* <CreateUsers/> */}

        <SearchBar>
          <SearchIcon img={"/follow/search.png"} />
          <SearchText>Search Friends!</SearchText>
        </SearchBar>

        <Text>Follow Reccomendation</Text>

        <StoriesCont>
          <StoriesUl>
            <StoriesLi>
              <StoriesImg img={"/follow/user1.jpg"} />
              <StoriesUsername>John</StoriesUsername>
            </StoriesLi>

            <StoriesLi>
              <StoriesImg img={"/follow/user2.jpg"} />
              <StoriesUsername>Sarah</StoriesUsername>
            </StoriesLi>

            <StoriesLi>
              <StoriesImg img={"/follow/user3.jpg"} />
              <StoriesUsername>Adam</StoriesUsername>
            </StoriesLi>
          </StoriesUl>

          <NextIcon img={"/follow/arrow.png"} />
        </StoriesCont>

        <FriendsCont>
          <FriendsHeader>
            <FriendsTitle>TESTTT</FriendsTitle>
            <FollowDotsMenu img={"/follow/dots.png"} />
          </FriendsHeader>

          <FriendsUl>
            <FormCont>
            {/* <div>
              {followers.map((post) => {
                return (
                  <TweetCont>
                    <TopCont>
                      <ProfilePic width="50px" />
                      <h5>@{post?.author?.name}</h5>
                    </TopCont>

                    <Text>{post.postText}</Text>

                    {editBox ? <EditPost /> : null}

                    <IconCont>
                      <Report
                        onClick={() => {
                          reportPost(post.id);
                        }}
                        src="./warning.png"
                      />
                      <Report
                        onClick={() => {
                          openEditBox();
                        }}
                        src="./edit.png"
                      />
                    </IconCont>
                    <FollowText
                      onClick={() => setFollowers()}
                      >Follow
                    </FollowText>
                  </TweetCont>
                );
              })}
            </div> */}
          </FormCont>



            <FriendsLi>
              <FriendsImg img={"/follow/user7.jpg"} />
              <FriendsName>Friend1</FriendsName>
              <UnFollowText
                // onClick={() => followPress(postLists.author.id)}
                onClick={() => deleteUsers()}
                >Unfollow
              </UnFollowText>
              <OnlineStatusCont>
                <OnlineDot></OnlineDot>
              </OnlineStatusCont>
            </FriendsLi>

            <FriendsLi>
              <FriendsImg img={"/follow/user6.jpg"} />
              <FriendsName>Friend2</FriendsName>
              <UnFollowText
                // onClick={() => followPress(postLists.author.id)}
                onClick={() => deleteUsers()}
                >Unfollow
              </UnFollowText>
              <OnlineStatusCont>
                <OnlineDot></OnlineDot>
              </OnlineStatusCont>
            </FriendsLi>

            <FriendsLi>
              <FriendsImg img={"/follow/user5.jpg"} />
              <FriendsName>Friend3</FriendsName>
              <UnFollowText
                // onClick={() => followPress(postLists.author.id)}
                onClick={() => deleteUsers()}
                >Unfollow
              </UnFollowText>
              <OnlineStatusCont>
                <LastLogin>1hr</LastLogin>
              </OnlineStatusCont>
            </FriendsLi>

          </FriendsUl>
        </FriendsCont>
      </Wrapper>
    </BodyCont>
  );
}
