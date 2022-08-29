const UserModel = require("../models/user.model");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");

//Sign Up
module.exports.signUp = async (req, res) => {
  console.log(req.body);
  const { pseudo, email, password } = req.body;

  try {
    const user = await UserModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
  }
};

//Sing In
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    res.status(200).json({
      user: user._id,
    });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};
