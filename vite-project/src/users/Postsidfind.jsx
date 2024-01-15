import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Postsidfind.css";
const PostsId = () => {
  const [posts, setposts] = useState([]);
  let { id } = useParams();
  const fetchpostsid = async () => {
    console.log(id);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setposts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchpostsid();
  }, []);
  console.log(posts);
  return (
    <div>
      <div>
        <nav className="header-nav">
          <ul className="header-nav_list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Entertainment</a>
            </li>
            <li>
              <a href="#">General</a>
            </li>
            <li>
              <a href="#">Health</a>
            </li>
            <li>
              <a href="#">Science</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-nav2">
        <div key={posts.id} className="">
          <img
            width={"296px"}
            height={"312px"}
            className="img-a"
            src="https://via.placeholder.com/600/24f355"
            alt=""
          />
          <h2 className="textss">{posts.title}</h2>
          <h2>{posts.body}</h2>
        </div>
      </div>
    </div>
  );
};

export default PostsId;
