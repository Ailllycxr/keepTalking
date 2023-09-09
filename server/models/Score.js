const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const scoreSchema = new Schema({
  score: {
    type: Int,
    required: true,
  },
  date: {
    type: Int,
    required: true,
  },
  teammates: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Score = model("Score", scoreSchema);

module.exports = Score;
