import { posts } from "./posts.js";
import Post from "./Post.js";
import PostForm from "./PostForm.js";

function App() {
  return (
    <main>
      <PostForm />
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </main>
  );
}

export default App;
