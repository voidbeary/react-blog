import { useEffect, useState } from "react";
import Post from "./Post.js";

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("/api/posts");
      const posts = await response.json();
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  if (posts === null) {
    return (
      <>
        <div className="p-10 max-w-xl mx-auto my-5 bg-white rounded-xl shadow-md font-body ">
          <div className="animate-pulse">
            <div className=" h-6 bg-blue-400 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-blue-400 rounded w-1/2 mb-2"></div>
            <div className="h-12 bg-blue-400 rounded w-5/6"></div>
          </div>
        </div>
      </>
    );
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
