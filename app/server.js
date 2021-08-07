const express = require("express");
const router = require("./routers/index.router");
const app = express();
const port = 3000;

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
