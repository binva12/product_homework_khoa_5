const express = require("express");
const router = require("./routers/index.router");
const app = express();
const path = require("path");
const pathPublic = path.join(__dirname, "./public");
app.use(express.static(pathPublic));
const port = 3000;

app.use(express.json());
app.set("view engine", "hbs");

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
