const router = require("express").Router();

router.use("/games", require("./games.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/users", require("./users.routes"));

/* router.use("/comments", require("./comments.routes")); */

module.exports = router;
