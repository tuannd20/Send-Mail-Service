const SendMailService = require("../services/sendMail.service");

const sendMail = (req, res) => {
  SendMailService.sendEmailViaAWS_SES(req.body, res);

  const response = {
    statusCode: 200,
    data: req.body,
    message: "Send mail contact successfully",
  };

  return res.status(200).send(response);
};

module.exports = { sendMail };
