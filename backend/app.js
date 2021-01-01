const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  )
  next();
})

app.use("/posts",(req, res, next) => {
  const posts = [
    {
      id: "87yw3u8",
      title: "First server side code",
      content: "This is a great server side code!"
    },
    {
      id: "iuhbfi4g4",
      title: "Second server side code",
      content: "This is a great second server side code!"
    },
  ];

  res.status(200).json({
    message: "Posts fetched succesfully",
    posts: posts
  })
})

module.exports = app;
