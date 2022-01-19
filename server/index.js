const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig);
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const resourceroute = require("./routes/resource");

// middleware to parse req.body
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use("/resource", resourceroute);

app.listen(PORT, console.log(`🚀 Server running at http://localhost:${PORT}`));
