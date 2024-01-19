const router = require("express").Router();

const User = require("./../models/User.model");

router.put("/substractVoteToUser/:_id", async (req, res, next) => {
  const { _id } = req.params;

  try {
    const response = await User.findByIdAndUpdate(
      _id,
      {
        $inc: { availableVotes: -1 },
      },
      { new: true }
    );

    if (response.availableVotes < 0) {
      response.availableVotes = 0;
      await response.save();
    }

    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.put("/addVoteToUser/:_id", async (req, res, next) => {
  const { _id } = req.params;

  try {
    const response = await User.findByIdAndUpdate(
      _id,
      {
        $inc: { availableVotes: 1 },
      },
      { new: true }
    );

    if (response.availableVotes > 5) {
      response.availableVotes = 5;
      await response.save();
    }

    res.json(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
