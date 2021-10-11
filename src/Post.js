function Post({ title, body, name, date }) {
  return (
    <article className="p-10 max-w-xl mx-auto my-5 bg-white rounded-xl shadow-md font-body">
      <h2 className="text-4xl text-black font-semibold mb-1">{title}</h2>
      <div className="mb-2 text-blue-600 text-xs ">
        <span>{name}</span>
        <span aria-hidden>{" | "}</span>
        <time>{date}</time>
      </div>
      <p className="text-gray-500">{body}</p>
    </article>
  );
}
export default Post;
