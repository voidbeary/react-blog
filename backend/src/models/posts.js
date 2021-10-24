import mongoose from "mongoose";

const postsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: String,
    body: String,
  },
  { timestamps: true }
);
const Posts = mongoose.model("posts", postsSchema);

export { Posts };
