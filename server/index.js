const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig);
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// middleware to parse req.body
app.use(express.json());

app.get("/users", (req, res) => {
  knex
    .select("*")
    .from("users")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("Error getting users");
    });
});

app.get("/posts", (req, res) => {
  knex
    .select("*")
    .from("post")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("Error getting posts");
    });
});

app.listen(PORT, console.log(`Server running at http://localhost:${PORT}`));
