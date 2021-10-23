function getPosts() {
  const PostsString = localStorage.posts || "[]";
  const Posts = JSON.parse(PostsString);
  return Posts;
}
function savePost(newPost) {
  const newPosts = [...getPosts(), newPost];
  localStorage.setItem("posts", JSON.stringify(newPosts));
}
export { getPosts, savePost };
