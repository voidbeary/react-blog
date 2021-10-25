import express from "express";
import { blogPostsRouter } from "./routes/blogPostsRouter.js";
import mongoose from "mongoose";
import path from "path";

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

  if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
      if (req.path.endsWith(/\.(txt|json|png|ico|js|css|html)/)) {
        res.sendFile(path.resolve(__dirname, "../frontend/build"));
      } else {
        res.sendFile(
          path.resolve(__dirname, "../frontend/build", "index.html")
        );
      }
    });
  }

  app.listen(PORT, () => {
    console.log("👂 Listening on port " + PORT);
  });
}
