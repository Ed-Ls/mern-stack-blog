const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (request, response) => {
  try {
    //Hash password before saving it on DB
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(request.body.password, salt);

    const PF = "http://localhost:5000/images/";

    //Creating USER on DB
    const newUser = new User({
      username: request.body.username,
      email: request.body.email,
      password: hashedPass,
      profilePicture: "avatar-anonyme.png",
    });
    const user = await newUser.save();

    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (request, response) => {
  try {
    const user = await User.findOne({ username: request.body.username });
    !user && response.status(400).json("Wrong credentials.");

    const validated = await bcrypt.compare(
      request.body.password,
      user.password
    );
    !validated && response.status(400).json("Wrong credentials.");

    const { password, ...others } = user._doc;
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
