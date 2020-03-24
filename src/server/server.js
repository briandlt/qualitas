const express = require('express');
const app = express();
const userRoutes = require("./routes/api/users");
const reposRoutes = require("./routes/api/repos");
const viewRouts = require("./routes/views/view.js");
const path = require("path");

const static = path.join(__dirname, "../../public");
app.use(express.static(static));

app.use("/", viewRouts);

app.use("/users", userRoutes);

app.use("/repos", reposRoutes);

app.listen(3000, function () {
  console.log('server on port 3000');
});
