import { useState } from "react";
import Input from "./Input";
import { InputSubmit } from "./InputSubmit.js";
import { useHistory } from "react-router-dom";

function PostForm() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [author, setAuthor] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  function handleTitleChange(value) {
    if (!value) {
      setTitleError("This field is required");
      setIsValid(false);
    } else {
      setTitleError("");
      setIsValid(true);
    }
    setTitle(value);
  }

  function handleAuthorChange(value) {
    setAuthor(value);
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (isSubmiting) {
      return;
    }

    const form = event.target;
    const userInputField = form.elements["body"];
    const body = userInputField.value;
    const newPost = { title, author, body };
    setIsSubmiting(true);
    async function savePost() {
      await fetch("http://localhost:3001/api/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      setIsSubmiting(false);
      history.push("/");
    }
    savePost();
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
        error={titleError}
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
      <InputSubmit isValid={isValid && !isSubmiting} />
    </form>
  );
}

export default PostForm;
