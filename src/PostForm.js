function PostForm() {
  return (
    <form className="flex flex-col p-10 max-w-xl mx-auto my-5 bg-blue-50 rounded-xl shadow-md font-body">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        className=" shadow-md focus:ring-2 focus:ring-blue-600 p-2 my-2  rounded-md"
        placeholder="title"
      ></input>

      <label htmlFor="author">Author</label>
      <input
        className="shadow-md focus:ring-2 focus:ring-blue-600 p-2 my-2 rounded-md"
        placeholder="author"
        id="author"
      ></input>
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
