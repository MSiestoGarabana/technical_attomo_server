const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const User = require("./../models/User.model");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware");

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
      const { username, _id, role } = createdUser;
      const user = { username, _id, role };

      res.status(201).json({ user });
    })

    .catch((err) => {
      next(err);
    });
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    res.status(400).json({ message: "Provide email and password." });
    return;
  }

  User.findOne({ username })
    .then((foundUser) => {
      if (!foundUser) {
        res.status(401).json({ message: "User not found." });
        return;
      }
      if (bcrypt.compareSync(password, foundUser.password)) {
        const { _id, username, role } = foundUser;
        const payload = { _id, username, role };

        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "72h",
        });
        res.status(200).json({ authToken: authToken });
      } else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
    })
    .catch((err) => next(err));
});

router.get("/verify", isAuthenticated, (req, res, next) => {
  res.status(200).json(req.payload);
});

module.exports = router;
