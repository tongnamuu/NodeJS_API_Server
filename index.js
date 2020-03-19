const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

function custommiddleware(req, res, next) {
  console.log("Custom Middleware with Error");
  next(new Error("Error"));
}
function errormiddleware(error, req, res, next) {
  console.log(error.message);
  next();
}
app.use(custommiddleware);
app.use(errormiddleware);
app.use(morgan("dev"));
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Server running at http://127.0.0.1:${port}`)
);
