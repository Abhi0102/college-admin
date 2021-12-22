const Student = require("../../../models/studentForm");
const Counter = require("../../../helpers/appGenerator");

module.exports.studentForm = async function (req, res) {
  if (
    !/^\d+$/.test(req.body.mobileNumber) ||
    req.body.mobileNumber.length !== 10
  ) {
    console.log("Mobile Numer");
    return res.status(422).json({
      data: {
        success: false,
        message: "Incorrect mobile number",
      },
    });
  } else if (
    !/^\d+$/.test(req.body.gaurdianMobileNumber) ||
    req.body.gaurdianMobileNumber.length !== 10
  ) {
    console.log("Gaurd Numer");
    return res.status(422).json({
      data: {
        success: false,
        message: "Incorrect gaurdian mobile number",
      },
    });
  } else if (!/^\d+$/.test(req.body.gaurdianAnualIncome)) {
    console.log("Anual Numer");
    return res.status(422).json({
      data: {
        success: false,
        message: "Annual Income should contain numbers only",
      },
    });
  } else if (!/^\d+$/.test(req.body.aadhaarNumber)) {
    return res.status(422).json({
      data: {
        success: false,
        message: "Aadhar Number Should have numbers only",
      },
    });
  }

  console.log(req.body);

  try {
    req.body.appNo = await Counter.getNextSequence("app_no");
    const student = await Student.create({
      ...req.body,
    });
    return res.status(200).json({
      data: {
        success: true,
      },
    });
  } catch (e) {
    console.log(e);
  }
  //   console.log(/d^\d+$/.test(req.body.gaurdianMobileNumber));
  return res.status(200).json({
    status: true,
  });
};
