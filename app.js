const express = require("express");
const cors = require("cors");
const indexRouter = require("./router/index");
const app = express();

const port = 3005;

app.use(cors());

app.use("/", indexRouter);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("adsadsasdhsadasksdhi");
});

app.listen(port, () => {
  console.log(`server is litsening at ${port}`);
});
