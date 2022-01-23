const router = require("express").Router();
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig);
const jwt = require("jsonwebtoken");
const SECRET = "I_need_this_study_materials";
const bcrypt = require("bcrypt");

router.post("/login", (request, response, next) => {
  knex
    .from("users")
    .where({ email: request.body.email })
    .first()
    .then((user) => {
      console.log("user......", { ...user });
      if (!user) {
        response.status(400).json({
          error: "Invalid email-id",
        });
      } else {
        return bcrypt
          .compare(request.body.password, user.password)
          .then((isAuthenticated) => {
            if (!isAuthenticated) {
              response.status(400).json({
                error: "Invalid password!",
              });
            } else {
              const token = jwt.sign({ ...user }, SECRET);

              return response.status(200).json({
                token,
                id: user.id,
                name: user.name,
                email: user.email,
              });
              // return jwt.sign(user, SECRET, (error, token) => {
              //   console.log("Token", token);
              //   response.status(200).json({ token });
              // });
            }
          });
      }
    });
});

module.exports = router;
