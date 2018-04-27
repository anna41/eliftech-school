const app = require("./app");
const fs = require("fs");
const spdy = require("spdy");
const options = {
  key: fs.readFileSync(__dirname + "/server.key"),
  cert: fs.readFileSync(__dirname + "/server.crt"),
  passphrase: "linux"
};

const port = process.env.PORT || 5000;

// spdy.createServer(options, app).listen(port, error => {
//   if (error) {
//     console.error(error);
//     return process.exit(1);
//   } else {
//     console.log(`Server listening at ${port}`);
//   }
// });
app.listen(port);
console.log(`Server listening at ${port}`);
