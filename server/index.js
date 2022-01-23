const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig);
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const resourceroute = require("./routes/resource");
const usersroute = require("./routes/users");

require("dotenv").config();
// middleware to parse req.body
app.use(express.json());
app.use("/", express.static("public"));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use("/resource", resourceroute);
app.use("/users", usersroute);

app.listen(PORT, console.log(`🚀 Server running at http://localhost:${PORT}`));
