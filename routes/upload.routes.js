const router = require("express").Router();
const { uploadImage } = require("../controllers/upload.controllers");
const uploaderMiddleware = require("../middlewares/uploader.middleware");

router.post("/image", uploaderMiddleware.single("gameImage"), uploadImage);

module.exports = router;
