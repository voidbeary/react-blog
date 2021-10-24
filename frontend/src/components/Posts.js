import { useEffect, useState } from "react";
import Post from "./Post.js";

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:3001/api/posts");
      const posts = await response.json();
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  if (posts === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <Post {...post} key={post._id} />
      ))}
    </>
  );
}

export default Posts;
