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

router.put("/editGame/:_id", (req, res) => {
  const { _id } = req.params;
  const { image, title, category, votesReceived } = req.body;

  Game.findByIdAndUpdate(
    _id,
    { image, title, category, votesReceived },
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
