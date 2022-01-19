const router = require("express").Router();
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig);

router.route("/:subject/:grade").get((req, res) => {
  knex
    .select("*")
    .from("resource")
    .where("subject", req.params.subject)
    .andWhere("grade", req.params.grade)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error getting resources");
    });
});

module.exports = router;
