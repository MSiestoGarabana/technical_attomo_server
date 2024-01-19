const router = require("express").Router();

const Game = require("./../models/Game.model");

router.get("/getAllGames", (req, res) => {
  Game.find()
    .sort({ votesReceived: -1 })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.get("/getGameById/:_gameId", (req, res) => {
  const { _gameId } = req.params;

  Game.findById(_gameId)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.post("/createGame", (req, res) => {
  const { image, title, category } = req.body;
  Game.create({ image, title, category })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.put("/editGame", (req, res) => {
  const { image, title, category, game_id } = req.body;

  Game.findByIdAndUpdate(game_id, { image, title, category }, { new: true })
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.put("/addVote/:_id", (req, res) => {
  const { _id: game_id } = req.params;
  const { user_id } = req.body;

  Game.findByIdAndUpdate(
    game_id,
    { $addToSet: { votedBy: user_id }, $inc: { votesReceived: 1 } },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => next(err));
});
router.put("/deductVote/:_id", (req, res) => {
  const { _id: game_id } = req.params;
  const { user_id } = req.body;

  Game.findByIdAndUpdate(
    game_id,
    {
      $pull: { votedBy: user_id },
      $inc: { votesReceived: -1 },
    },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

router.delete("/deleteGame/:_id", (req, res) => {
  const { _id } = req.params;

  Game.findByIdAndDelete(_id)
    .then((response) => res.json(response))
    .catch((err) => next(err));
});

module.exports = router;
