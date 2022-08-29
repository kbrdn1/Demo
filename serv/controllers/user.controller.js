const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;

//get all users
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

//get user info
module.exports.userInfo = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  }).select("-password");
};

//delete user
module.exports.deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.remove({
      _id: req.params.id,
    }).exec();
    res.status(200).json({ message: "Sucessfully deleted" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};