import { posts as postsMocked } from "../posts.js";
import Post from "./Post.js";
import PostForm from "./PostForm.js";
import { useState } from "react";

const useMockPosts = process.env.REACT_APP_USE_MOCK_POSTS === "true";

function Posts() {
  const [posts, setPosts] = useState(useMockPosts ? postsMocked : []);
  function handleAddPost(title, author, body) {
    const id = `${Date.now()}`;
    const dateObj = new Date();
    const date = dateObj.toJSON();
    const newPost = { title, author, body, id, date };
    setPosts([...posts, newPost]);
  }

  return (
    <>
      <PostForm onAddPost={handleAddPost} />
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </>
  );
}

export default Posts;
