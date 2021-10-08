import { posts } from "./posts.js";
import Post from "./Post.js";

function App() {
  return (
    <div>
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
