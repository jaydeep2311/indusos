const mongoose = require("mongoose");

const text = new mongoose.Schema({
  emojiText: { type: String, required: true },
});

module.exports = mongoose.model("textr", text);
