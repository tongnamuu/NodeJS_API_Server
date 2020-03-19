const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/user", (req, res) => res.send("USER!!"));

app.listen(port, () =>
  console.log(`Server running at http://127.0.0.1:${port}`)
);
