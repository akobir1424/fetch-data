import PostsId from "./users/Postsidfind.jsx";
import Posts from "./users/Posts.jsx";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<PostsId />} />
      </Routes>
    </>
  );
}

export default App;
