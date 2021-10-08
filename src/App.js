import { posts } from "./posts.js";
import Post from "./Post.js";

function App() {
  return (
    <main>
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </main>
  );
}

export default App;
