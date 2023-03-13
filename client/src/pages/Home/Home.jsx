//Hooks and react
import React, { useState, useContext, useEffect } from "react";

//Context
import { AuthContext } from "../../context/AuthContext";

//Axios
import axios from "axios";

//Components
import { Post } from "../../components/post/Post";
import { RightBox } from "../../components/rightBox/RightBox";

//CSS
import "./home.css";

export const Home = () => {
  // usestate for posts
  const [timelinePosts, setTimelinePosts] = useState([]);
  const { user } = useContext(AuthContext);

  //useeffect for posts
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/timeline/640894ddd9c782f08dac4bae");
      setTimelinePosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    getPosts();
  }, [user._id]);

  console.log(timelinePosts);

  return (
    <div className="container">
      <div className="home-page">
        <div className="home-page-left">
          <div className="posts">
            {timelinePosts.map((post) => (
              <Post top bottom key={post._id} post={post} />
            ))}
          </div>
        </div>
        <div className="home-page-right">
          <RightBox />
        </div>
      </div>
    </div>
  );
};
