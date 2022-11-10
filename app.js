const express = require("express");
const app = express();

const port = 3005;

app.get("/", (req, res) => {
  res.send("adsadsasdhsadasksdhi");
});

app.listen(port, () => {
  console.log(`server is litsening at ${port}`);
});
