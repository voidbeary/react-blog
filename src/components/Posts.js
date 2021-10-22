import Post from "./Post.js";
import PostForm from "./PostForm.js";
import { useState } from "react";

function getPosts() {
  const PostsString = localStorage.posts || "[]";
  const Posts = JSON.parse(PostsString);
  return Posts;
}

function Posts() {
  const [posts, setPosts] = useState(getPosts);

  function handleAddPost(newPost) {
    const newPosts = [...posts, newPost];
    localStorage.setItem("posts", JSON.stringify(newPosts));
    setPosts(newPosts);
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
