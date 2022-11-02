const SendMailService = require("../services/sendMail.service");

const sendMail = (req, res) => {
  console.log("Controller payload:", req.body);
  SendMailService.sendEmailViaAWS_SES(req.body, res);

  return res.status(200).send("Send mail successfully");
};

module.exports = { sendMail };
