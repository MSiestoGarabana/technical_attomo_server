const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
  {
    image: {
      type: String,
      required: false,
      default: "https://i.stack.imgur.com/l60Hf.png",
    },

    title: {
      type: String,
      required: [true, "Category field cannot be empty"],
    },
    category: {
      type: String,
      required: [true, "Category field cannot be empty"],
    },
    votesReceived: {
      type: Number,
      default: 0,
    },
    votedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Game = model("Game", gameSchema);

module.exports = Game;
