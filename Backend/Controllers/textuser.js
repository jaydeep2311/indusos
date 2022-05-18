const textModel = require("../Models/text");

async function getAlltexts(req, res, next) {
  const ans = await textModel.find({});
  res.json(ans);
}
async function createTexts(req, res, next) {
  const val = req.body.emojiText;
  console.log(val);
  const response = await textModel.insertMany([{ emojiText: val }]);
  res.send(response);
}

module.exports = {
  getAlltexts,
  createTexts,
};
