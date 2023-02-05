const { Unauthorized } = require("http-errors");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const { SECRET_KEY } = process.env;

const bcrypt = require("bcryptjs");

const { User } = require("../../models");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passCompare = bcrypt.compareSync(password, user.password);

  if (!user || !passCompare || !user.verify) {
    throw new Unauthorized("Email or password is wrong or not verify");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
