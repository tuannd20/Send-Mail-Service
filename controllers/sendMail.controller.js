const SendMailService = require("../services/sendMail.service");

const sendMail = (req, res) => {
  if (
    req.body.email === "" ||
    req.body.fullName === "" ||
    req.body.phoneNumber ||
    req.body.message === ""
  ) {
    const responseInvalid = {
      statusCode: 400,
      message: "Invalid data",
    };

    return res.send(responseInvalid);
  }

  SendMailService.sendEmailViaAWS_SES(req.body, res);

  const response = {
    statusCode: 200,
    data: req.body,
    message: "Send mail contact successfully",
  };

  return res.send(response);
};

module.exports = { sendMail };
