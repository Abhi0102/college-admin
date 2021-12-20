const User = require("../../../models/user");

module.exports.register = async function (req, res) {
  // Checking If password matches
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(401).json({
      data: {
        success: false,
        message: `Password and Confirmed Password doesn't match `,
      },
    });
  }

  // If Password Matches
  else if (req.body.password === req.body.confirmPassword) {
    try {
      // Creating user
      const user = await User.create({
        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password,
      });

      return res.status(200).json({
        data: {
          success: true,
          message: "User Successfully Created",
        },
      });
    } catch (err) {
      // If User Already exists i.e. userName is not unique
      if (err.code === 11000) {
        return res.status(401).json({
          data: {
            success: false,
            message: `User Name Already Exists `,
          },
        });
      }
    }
  }
};

module.exports.userLogin = async function (req, res) {
  const user = await User.findOne({
    userName: req.body.userName,
  });

  if (user && user.password === req.body.password) {
    console.log("Success");
  } else {
    return res.status(401).json({
      data: {
        success: false,
        message: "Username or Password Incorrect",
      },
    });
    // console.log("Username or Password Incorrect");
  }
};
