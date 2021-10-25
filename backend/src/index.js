import express from "express";
import { blogPostsRouter } from "./routes/blogPostsRouter.js";
import mongoose from "mongoose";
import path from "path";
import serveSpa from "serve-spa";

const __dirname = path.resolve();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3001;

main().catch(console.log);

async function main() {
  await mongoose.connect(DB_URL);

  const app = express();

  app.use(express.json());
  app.use((err, req, res, next) => {
    res.status(err.status);
    res.send(err);
  });
  app.use("/api", blogPostsRouter);

  app.get("/api", function (req, res) {
    res.send("Hello World");
  });

  serveSpa(app, path.resolve(__dirname, "../frontend/build/"));

  app.listen(PORT, () => {
    console.log("👂 Listening on port " + PORT);
  });
}
