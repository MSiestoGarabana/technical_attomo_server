const router = require("express").Router();

router.use("/games", require("./games.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/users", require("./users.routes"));
router.use("/upload", require("./upload.routes"));

module.exports = router;
