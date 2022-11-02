const express = require("express");
const router = express.Router();

const send = require("../controllers/sendMail.controller");

router.post("/home/sendEmail", function (req, res, next) {
  console.log("router: ", req.body);
  send.sendMail(req, res);
});

module.exports = router;
