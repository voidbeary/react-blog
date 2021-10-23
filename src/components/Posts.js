import Post from "./Post.js";
import { getPosts } from "../utils/postsStorage.js";

function Posts() {
  const posts = getPosts().sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </>
  );
}

export default Posts;
