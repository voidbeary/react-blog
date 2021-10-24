import { Posts } from "../models/posts.js";
import mongoose from "mongoose";

async function addPost({ title, author, body }) {
  const { _id } = await Posts.create({ title, author, body });
  const post = await Posts.findById(_id).lean();
  return post;
}
async function getPosts() {
  const posts = await Posts.find().sort("-createdAt").lean();
  return posts;
}
export { addPost, getPosts };
