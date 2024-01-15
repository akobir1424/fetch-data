import React, { useEffect, useState } from "react";
import "./posts.css";
import { Link } from "react-router-dom";
const Posts = () => {
  const [posts, setposts] = useState([]);

  const fetchposts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setposts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchposts();
  }, []);
  return (
    <>
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
      <div className="our">
        <h1>Our Latest Posts</h1>
      </div>
      <div>
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <Link to={`/posts/${post.id}`}>
                <img
                  width={"296px"}
                  height={"312px"}
                  className="img-a"
                  src="https://via.placeholder.com/600/24f355"
                  alt=""
                />
                <h2 className="textss">{post.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
