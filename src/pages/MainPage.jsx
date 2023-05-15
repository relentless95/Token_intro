import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MainPage.scss";

function MainPage({ user, setUser }) {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    if (user == null) {
      setUser(JSON.parse(sessionStorage.getItem("token")));
      console.log(user);
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://redi-backend.azurewebsites.net/api/Post", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setPost(res.data);
      });
  }, [user]);

  console.log("posts------>", posts);
  return (
    <div>
      MainPage
      <div> {user.username}</div>
      <div>{user.email}</div>
      {posts.map((onePost) => {
        return (
          <>
            <div>{onePost.title}</div>
            <div>{onePost.content}</div>
            <div>{onePost.user.username}</div>
            <div>{onePost.comments[0].message}</div>
          </>
        );
      })}
    </div>
  );
}

export default MainPage;
