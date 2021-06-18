const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const htmlHome = fs.readFileSync(`${__dirname}/public/html/home.html`);
app.use(express.static(path.join(`${__dirname}/public`)));

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(htmlHome);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
