const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "src")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "1-index.html"));
});

app.get("/2-index", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "2-index.html"));
});

app.get("/3-nav_index", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "3-nav_index.html"));
});

app.get("/4-flexbox_index", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "4-flexbox_index.html"));
});

app.get("/5-gridflex_index", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "5-gridflex_index.html"));
});

app.get("/6-imageGallery", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "6-imageGallery.html"));
});



app.listen(3000, () => {
  console.log("App listening on port 3000");
});
