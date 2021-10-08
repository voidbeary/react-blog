function Post({ id, title, body, name, date }) {
  return (
    <div className="p-10 max-w-xl mx-auto my-5 bg-white rounded-xl shadow-md font-body">
      <h2 className="text-4xl text-black font-semibold mb-1">{title}</h2>
      <h3 className="mb-2 text-blue-600 text-xs ">{name + " | " + date}</h3>
      <p className="text-gray-500">{body}</p>
    </div>
  );
}
export default Post;
