const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const {
  getAllGames,
  getGameById,
  createGame,
  editGame,
  addVote,
  deductVote,
  deleteGame,
} = require("../controllers/games.controllers");

router.get("/getAllGames", getAllGames);
router.get("/getGameById/:_gameId", getGameById);
router.post("/createGame", createGame);
router.put("/editGame", editGame);
router.put("/addVote/:_id", addVote);
router.put("/deductVote/:_id", deductVote);
router.delete("/deleteGame/:_id", deleteGame);

module.exports = router;
