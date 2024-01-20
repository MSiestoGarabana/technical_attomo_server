const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    author: {
      type: String,
      required: [true, "Author field cannot be empty"],
    },
    text: {
      type: String,
      required: [true, "Text field cannot be empty"],
    },
    votesReceived: {
      type: Number,
      default: 0,
    },
    applicants: [
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

const Comment = model("Comment", commentSchema);

module.exports = Comment;
