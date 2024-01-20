const Game = require("../models/Game.model");

const getAllGames = (req, res, next) => {
  Game.find()
    .sort({ votesReceived: -1 })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
};
const getGameById = (req, res, next) => {
  const { _gameId } = req.params;

  Game.findById(_gameId)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
};
const createGame = (req, res, next) => {
  const { image, title, category } = req.body;
  Game.create({ image, title, category })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
};
const editGame = (req, res, next) => {
  const { image, title, category, game_id } = req.body;

  Game.findByIdAndUpdate(game_id, { image, title, category }, { new: true })
    .then((response) => res.json(response))
    .catch((err) => next(err));
};
const addVote = (req, res, next) => {
  const { _id: game_id } = req.params;
  const { user_id } = req.body;

  Game.findByIdAndUpdate(
    game_id,
    { $addToSet: { votedBy: user_id }, $inc: { votesReceived: 1 } },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => next(err));
};
const deductVote = (req, res, next) => {
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
};
const deleteGame = (req, res, next) => {
  const { _id } = req.params;

  Game.findByIdAndDelete(_id)
    .then((response) => res.json(response))
    .catch((err) => next(err));
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  editGame,
  addVote,
  deductVote,
  deleteGame,
};
