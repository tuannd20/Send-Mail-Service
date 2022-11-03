const AWS = require("aws-sdk");
const config = require("../config/aws.ses");

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
            "<html><h3>Full name: " +
            payload.fullName +
            "</h3><h3>Email of user: " +
            payload.email +
            "</h3><h3>Phone number: " +
            payload.phoneNumber +
            "</h3><h3>Message: " +
            payload.message +
            "</h3></html>",
        },
        Text: {
          Charset: "UTF-8",
          Data: "Good morning!!!!!",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "User Send Contact with us",
      },
    },
    Source: "duytuanndt20@gmail.com",
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();

  sendEmailReceiver
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error, error.stack);
    });
};
