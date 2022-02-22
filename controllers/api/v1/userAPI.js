const User = require("../../../models/user");
const jwt = require("jsonwebtoken");
const nextSeq = require("../../../helpers/appGenerator");
const Constant = require("../../../models/constants");
const FormField = require("../../../models/formField");
const Options = require("../../../models/options");
// const { getNextSequence } = require("../../../helpers/appGenerator");

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
  try {
    const user = await User.findOne({
      userName: req.body.userName,
    });

    if (user && user.password === req.body.password) {
      const userJWT = {
        _id: user._id,
        name: user.name,
        userName: user.userName,
      };

      // console.log("Success");
      return res.status(200).json({
        data: {
          token: jwt.sign(userJWT, process.env.SECRET, {
            expiresIn: "50000000",
          }),
          success: true,
          user: userJWT,
        },
      });
    } else {
      return res.status(422).json({
        data: {
          success: false,
          message: "Username or Password Incorrect",
        },
      });
      // console.log("Username or Password Incorrect");
    }
  } catch (err) {
    console.log(`Error in userLogin ${err}`);
  }
};

module.exports.authenticate = function (req, res) {
  // console.log(req.body);

  return res.status(200).json({
    data: {
      success: true,
    },
  });
};

// module.exports.dataCorrection = function(req,res){
//   const student =
// }

module.exports.fetchConstants = async function (req, res) {
  try {
    const formField = await FormField.find({}).sort("order");
    for (let i in formField) {
      const data = formField[i].data;
      for (let k in data) {
        if (data[k].type === "select") {
          const opt = await Options.findById(data[k].option);
          data[k].option = opt.data;
        }
      }
    }
    const options = await Options.find({});

    return res.status(200).json({
      success: true,
      data: { formField, options },
    });
  } catch (err) {
    return res.status(422).json({
      success: false,
      message: "Some error occured while fetching Constants",
    });
  }
};
