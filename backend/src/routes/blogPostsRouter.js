import express from "express";
import { addPost, getPosts } from "../services/posts.js";

const blogPostsRouter = express.Router();

blogPostsRouter.post("/posts", async (req, res) => {
  if (typeof req.body !== "object" || req.body instanceof Array) {
    res.status(400);
    res.send({ error: "Post is not an object" });
    return;
  }
  if (!("title" in req.body)) {
    res.status(400);
    res.send({ error: "Post must have a title" });
    return;
  }
  if (typeof req.body.title !== "string") {
    res.status(400);
    res.send({ error: "Post title must be a string" });
    return;
  }
  if ("author" in req.body && typeof req.body.author !== "string") {
    res.status(400);
    res.send({ error: "Post author must be a string" });
    return;
  }
  if ("body" in req.body && typeof req.body.body !== "string") {
    res.status(400);
    res.send({ error: "Post body must be a string" });
    return;
  }
  const post = await addPost(req.body);
  res.status(201);
  res.send(post);
});

blogPostsRouter.get("/posts", async (req, res) => {
  const posts = await getPosts();
  res.status(200);
  res.send(posts);
});

export { blogPostsRouter };
