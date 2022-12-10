import styled from "styled-components";
import React from "react";
// import { Text, Image, Icon} from "react-native";
// import {FollowerData} from './FolloerData';
import { useRouter } from "next/router";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";

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
const AddIcon = styled.img`
  background-image: url(${(props) => props.img});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffffff;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 2px solid white;
  padding: 5px;
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
const DotsMenu = styled.img`
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
  width: calc(100% - 100px);
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
  width: 7px;
  height: 7px;
  background: #48d28b;
  border-radius: 50%;
`;
const LastLogin = styled.span``;

export default function Follower({
  router,
  action
}) {
  const r = useRouter();

  return (
    <Wrapper>
      <Profile>
        <ProfUserName>User's Name</ProfUserName>
        <ProfImg img={"/follow/user1.jpg"} />
      </Profile>

      <SearchBar>
        <SearchIcon img={"/follow/search.png"} />
        <SearchText>Search Friends!</SearchText>
      </SearchBar>

      <StoriesCont>
        <StoriesUl>
          <StoriesLi>
            <StoriesImg img={"/follow/user1.jpg"} />
            {/* <TouchableOpacity
              style={{
                backgroundColor: "red",
                // position: "absolute",
                // top: 40,
                // left: 20,
                width: 800,
                height: 10,
                borderRadius: "50%",
                borderStyle: "solid",
                borderColor: "white",
                padding: 5,
              }}
              onPress={() => action.navigate("Home")}
              img={"/follow/add.png"}
            >
              <AddIcon/>
            </TouchableOpacity> */}
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

          <StoriesLi>
            <StoriesImg img={"/follow/user4.jpg"} />
            <StoriesUsername>Karie</StoriesUsername>
          </StoriesLi>
        </StoriesUl>

        <NextIcon img={"/follow/arrow.png"} />
      </StoriesCont>

      <FriendsCont>
        <FriendsHeader>
          <FriendsTitle>Friends</FriendsTitle>
          <DotsMenu img={"/follow/dots.png"} />
        </FriendsHeader>

        <FriendsUl>
          <FriendsLi>
            <FriendsImg img={"/follow/user1.jpg"} />
            <FriendsName>User</FriendsName>
            <OnlineStatusCont>
              <OnlineDot></OnlineDot>
            </OnlineStatusCont>
          </FriendsLi>

          <FriendsLi>
            <FriendsImg img={"/follow/user2.jpg"} />
            <FriendsName>Friend1</FriendsName>
            <OnlineStatusCont>
              <OnlineDot></OnlineDot>
            </OnlineStatusCont>
          </FriendsLi>

          <FriendsLi>
            <FriendsImg img={"/follow/user3.jpg"} />
            <FriendsName>Friend2</FriendsName>
            <OnlineStatusCont>
              <LastLogin>1hr</LastLogin>
            </OnlineStatusCont>
          </FriendsLi>

          <FriendsLi>
            <FriendsImg img={"/follow/user4.jpg"} />
            <FriendsName>Friend3</FriendsName>
            <OnlineStatusCont>
              <OnlineDot></OnlineDot>
            </OnlineStatusCont>
          </FriendsLi>

          <FriendsLi>
            <FriendsImg img={"/follow/user5.jpg"} />
            <FriendsName>Friend4</FriendsName>
            <OnlineStatusCont>
              <LastLogin>2m</LastLogin>
            </OnlineStatusCont>
          </FriendsLi>
        </FriendsUl>
      </FriendsCont>
    </Wrapper>
  );
}
