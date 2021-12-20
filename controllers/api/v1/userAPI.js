module.exports.register = async function (req, res) {
  console.log(req.body);
  if (req.body.password !== req.body.confirmPassword) {
    return res.json(401, {
      data: {
        success: false,
        message: `Password and Confirmed Password doesn't match `,
      },
    });
  }
};
