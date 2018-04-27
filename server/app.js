const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === "test") {
  app.use(morgan("dev"));
}

app.get("/http2", (res, req) => {
  res.status(200).json({ message: "ok" });
});

app.use(bodyParser.json());

// Routes
app.use("/users", require("./routes/users"));
app.use("/secret", require("./routes/secret"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

module.exports = app;
