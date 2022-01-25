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
            }
          });
      }
    });
});
router.post("/signup", async (request, response, next) => {
  const { name, email, password } = request.body;
  if (!name || !email || !password) {
    return response
      .status(400)
      .send({ error: "Name, email and password is required" });
  }
  const fetchemail = await knex
    .from("users")
    .where({ email: request.body.email })
    .first();
  if (fetchemail) {
    return response.status(400).send({ error: "Email is already registered" });
  }
  const hashpassword = await bcrypt.hash(password, 10);
  await knex("users").insert({ name, email, password: hashpassword });
  return response.status(200).send({ message: "Sign Up successfully" });
});

router.post("/social-login", async (request, response, next) => {
  const { name, email } = request.body;
  if (!name || !email) {
    return response.status(400).send({ error: "Name and email is required" });
  }
  const fetchemail = await knex
    .from("users")
    .where({ email: request.body.email })
    .first();
  if (fetchemail) {
    const token = jwt.sign({ ...fetchemail }, SECRET);

    return response.status(200).json({
      token,
      id: fetchemail.id,
      name: fetchemail.name,
      email: fetchemail.email,
    });
  }

  const user = await knex("users").insert({
    name,
    email,
  });
  const token = jwt.sign({ ...user }, SECRET);
  return response.status(200).json({
    token,
    id: user.id,
    name: user.name,
    email: user.email,
  });
});

module.exports = router;
