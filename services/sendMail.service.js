const AWS = require("aws-sdk");
const config = require("../config/default.ses.json");

exports.sendEmailViaAWS_SES = (payload) => {
  console.log("Body:", payload);
  console.log("Body has Email:", payload.email);

  AWS.config.update({
    accessKeyId: config.AWS.accessKeyId,
    secretAccessKey: config.AWS.secretAccessKey,
    region: config.AWS.region,
  });

  const ses = new AWS.SES({ apiVersion: "2010-12-01" });
  const params = {
    Destination: {
      ToAddresses: ["duytuanndt20@gmail.com"],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data:
            "<html><h2>Contact of:</h2><h3>Full name:" +
            payload.fullName +
            "</3><h2>Contact email from user: " +
            payload.email +
            "</h2></html>",
        },
        Text: {
          Charset: "UTF-8",
          Data: "Hey, this is test.",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "test",
      },
    },
    Source: "duytuanndt20@gmail.com",
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();

  sendEmailReceiver
    .then((data) => {
      console.log(data.MessageId);
    })
    .catch((error) => {
      console.error(error, error.stack);
    });
};
