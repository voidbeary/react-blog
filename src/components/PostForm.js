import { useState } from "react";
import Input from "./Input";

function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const userInputField = form.elements["body"];
    const body = userInputField.value;
    const id = `${Date.now()}`;
    const dateObj = new Date();
    const date = dateObj.toJSON();
    const newPost = { title, author, body, id, date };

    onAddPost(newPost);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-10 max-w-xl mx-auto my-5 bg-blue-50 rounded-xl shadow-md font-body"
    >
      <Input
        value={title}
        onChange={handleTitleChange}
        label="Title"
        id="title"
        required
      />
      <Input
        value={author}
        onChange={handleAuthorChange}
        className="shadow-md focus:ring-2 focus:ring-blue-600 p-2 my-2 rounded-md"
        label="Author"
        id="author"
      />
      <label htmlFor="body">Body</label>
      <textarea
        id="body"
        className="shadow-md focus:ring-2 focus:ring-blue-600 p-2 my-2 rounded-md"
        placeholder="body"
      ></textarea>
      <input
        type="submit"
        value="Submit"
        className="bg-blue-600 text-white rounded-md py-2 mt-2 hover:bg-blue-800 shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
      />
    </form>
  );
}

export default PostForm;
