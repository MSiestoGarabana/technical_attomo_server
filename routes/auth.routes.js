const router = require("express").Router();
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const User = require("./../models/User.model");

router.post("/signup", (req, res, next) => {
  const { username, password, role } = req.body;

  if (password.length < 2) {
    res
      .status(400)
      .json({ message: "Password must have at least 3 characters" });
    return;
  }

  User.findOne({ username })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "User already exists." });
        return;
      }
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      return User.create({ username, password: hashedPassword, role });
    })

    .then((createdUser) => {
      const { email, username, _id, role } = createdUser;
      const user = { email, username, _id, role };

      res.status(201).json({ user });
    })

    .catch((err) => {
      next(err);
    });
});

module.exports = router;
