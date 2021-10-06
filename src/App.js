import { posts } from "./posts.js";

function App() {
  return (
    <>
      <h1>blog</h1>
      {posts.map(({ id, title, body }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
